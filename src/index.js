import dns from "dns";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});

// Use reliable DNS servers for MongoDB SRV lookup
dns.setServers(["8.8.8.8", "1.1.1.1"]);

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running at port: ${process.env.PORT || 8000}`
            );
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!!..", err);
    });