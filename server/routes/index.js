import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { writeJournal } from "../controllers/Journals.js";
import {
  finishAcceptance,
  finishGratitude,
  finishNonReactivity,
  finishPatience,
  getAcceptance,
  getGratitude,
  getNonReactivity,
  getPatience,
  getTask,
} from "../controllers/Tasks.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.post("/submitJournal", writeJournal);

router.post("/task", getTask);
router.post("/get-patience", getPatience);
router.post("/get-non-reactivity", getNonReactivity);
router.post("/get-acceptance", getAcceptance);
router.post("/get-gratitude", getGratitude);

router.patch("/finish-patience", finishPatience);
router.patch("/finish-non-reactivity", finishNonReactivity);
router.patch("/finish-acceptance", finishAcceptance);
router.patch("/finish-gratitude", finishGratitude);
export default router;
