class ApiError extends Error {
    constructor(
        statusCode,
        message = "Somthing went wrong",
        _error =[],
        statck=""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.error = this.error

        if(statck){
            this.stack = statck
        }else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}