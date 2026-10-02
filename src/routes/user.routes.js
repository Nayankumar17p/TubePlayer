import express from "express";
import { registerUser , loginUser, logoutUser, refreshAccessToken, getUserWatchHistory} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser)

//secureRoutes
router.route("/logout").post(verifyJWT,  logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/history").get(verifyJWT, getUserWatchHistory)

export { router };
