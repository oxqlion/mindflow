import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUserJournal, writeJournal } from "../controllers/Journals.js";
import {
  finishAcceptance,
  finishGratitude,
  finishNonReactivity,
  finishPatience,
  getAcceptance,
  getAllAcceptance,
  getAllGratitude,
  getAllNonReactivity,
  getAllPatience,
  getGratitude,
  getNonReactivity,
  getPatience,
  getTask,
} from "../controllers/Tasks.js";
import { getProgress } from "../controllers/Progress.js";

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

router.post("/get-all-patience", getAllPatience);
router.post("/get-all-non-reactivity", getAllNonReactivity);
router.post("/get-all-acceptance", getAllAcceptance);
router.post("/get-all-gratitude", getAllGratitude);

router.patch("/finish-patience", finishPatience);
router.patch("/finish-non-reactivity", finishNonReactivity);
router.patch("/finish-acceptance", finishAcceptance);
router.patch("/finish-gratitude", finishGratitude);

router.post("/progress", getProgress);

router.post("/user-journal", getUserJournal);

export default router;
