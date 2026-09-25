class  ApiResponse{
    constructor(statusCode,message,data,success,error){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = this.statusCode<400
        this.error = error
    }
}

export  { ApiResponse }
