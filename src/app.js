import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ApiError from "./utils/ApiError.js";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN, // make sure env variable name matches
  credentials: true
}));

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

app.use(express.static("public"));
app.use(cookieParser());

// Import router correctly
import { router as userRouter } from "./routes/user.routes.js";

// Mount routes
app.use("/api/v1/users", userRouter);

app.use((error, req, res, next) => {
  const statusCode = error instanceof ApiError ? error.statusCode : 500;
  const message = error.message || "Internal server error";

  return res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    errors: error.error || [],
  });
});

export { app };
