import { Op } from "sequelize";
import Results from "../models/ResultModel.js";
import Progress from "../models/ProgressModel.js";
import Patience from "../models/PatienceModel.js";
import NonReactivity from "../models/NonReactivityModel.js";
import Acceptance from "../models/AcceptanceModel.js";
import Gratitude from "../models/GratitudeModel.js";

export const getTask = async (req, res) => {
  //   const { userId, currDate } = req.body;
  console.log(
    "Di tasks controller, user_id : ",
    req.body.user_id,
    ", currDate : ",
    req.body.date
  );
  const date = req.body.date;

  try {
    const results = await Results.findAll({
      where: {
        user_id: req.body.user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });
    res.json({ task: results });
  } catch (error) {
    console.log("Error di task controller : ", error);
    return res.sendStatus(403);
  }
};

export const getPatience = async (req, res) => {
  // const { user_id, date } = req.body;

  try {
    const result = await Patience.findAll({
      where: {
        user_id: req.body.user_id,
        date: {
          [Op.substring]: `${req.body.date}%`,
        },
        finished: 0,
      },
    });
    console.log("patience result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting patience task error : ", error);
    res.sendStatus(403);
  }
};

export const getAllPatience = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await Patience.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });
    console.log("all patience result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting all patience task error : ", error);
    res.sendStatus(403);
  }
};

export const getNonReactivity = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await NonReactivity.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
        finished: 0,
      },
    });
    console.log("non reactivity result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting non-reactivity task error : ", error);
    res.sendStatus(403);
  }
};

export const getAllNonReactivity = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await NonReactivity.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });
    console.log("all non reactivity result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting all non reactivity task error : ", error);
    res.sendStatus(403);
  }
};

export const getAcceptance = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await Acceptance.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
        finished: 0,
      },
    });
    console.log("acceptance result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting acceptance task error : ", error);
    res.sendStatus(403);
  }
};

export const getAllAcceptance = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await Acceptance.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });
    console.log("all acceptance result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting all acceptance task error : ", error);
    res.sendStatus(403);
  }
};

export const getGratitude = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await Gratitude.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
        finished: 0,
      },
    });
    console.log("gratitude result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting gratitude task error : ", error);
    res.sendStatus(403);
  }
};

export const getAllGratitude = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const result = await Gratitude.findAll({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });
    console.log("all gratitude result from backend : ", result);
    res.json({ task: result });
  } catch (error) {
    console.log("Geting all gratitude task error : ", error);
    res.sendStatus(403);
  }
};

export const finishPatience = async (req, res) => {
  const { taskId, date, user_id } = req.body;

  try {
    const record = await Patience.findByPk(taskId);
    if (!record) return res.json({ msg: "error. couldn't find task" });
    await record.update({ finished: 1 });

    const existingProgress = await Progress.findOne({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });

    if (existingProgress) {
      existingProgress.patience_score = req.body.patienceScore;
      // existingProgress.nonreactivity_score = req.body.nonreactivityScore;
      // existingProgress.acceptance_score = req.body.acceptanceScore;
      // existingProgress.gratitude_score = req.body.gratitudeScore;
      // existingProgress.total_score = req.body.totalScore;
      await existingProgress.save();
      console.log("Progress updated successfully");
    } else {
      const newProgress = await Progress.create({
        user_id: user_id,
        patience_score: req.body.patienceScore || 0,
        nonreactivity_score: req.body.nonreactivityScore || 0,
        acceptance_score: req.body.acceptanceScore || 0,
        gratitude_score: req.body.gratitudeScore || 0,
        total_score: req.body.totalScore || 0,
      });
    }

    return res.json({ msg: "task finished" });
  } catch (error) {
    console.log("failed to finish patience in task controller. error :", error);
    res.sendStatus(403);
  }
};
export const finishNonReactivity = async (req, res) => {
  const { taskId, date, user_id } = req.body;

  try {
    const record = await NonReactivity.findByPk(taskId);
    if (!record) return res.json({ msg: "error. couldn't find task" });
    await record.update({ finished: 1 });

    const existingProgress = await Progress.findOne({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });

    if (existingProgress) {
      // existingProgress.patience_score = req.body.patienceScore;
      existingProgress.nonreactivity_score = req.body.nonreactivityScore;
      // existingProgress.acceptance_score = req.body.acceptanceScore;
      // existingProgress.gratitude_score = req.body.gratitudeScore;
      // existingProgress.total_score = req.body.totalScore;
      await existingProgress.save();
      console.log("Progress updated successfully");
    } else {
      const newProgress = await Progress.create({
        user_id: user_id,
        patience_score: req.body.patienceScore || 0,
        nonreactivity_score: req.body.nonreactivityScore || 0,
        acceptance_score: req.body.acceptanceScore || 0,
        gratitude_score: req.body.gratitudeScore || 0,
        total_score: req.body.totalScore || 0,
      });
    }

    return res.json({ msg: "task finished" });
  } catch (error) {
    console.log(
      "failed to finish non reactivity in task controller. error :",
      error
    );
    res.sendStatus(403);
  }
};
export const finishAcceptance = async (req, res) => {
  const { taskId, date, user_id} = req.body;

  try {
    const record = await Acceptance.findByPk(taskId);
    if (!record) return res.json({ msg: "error. couldn't find task" });
    await record.update({ finished: 1 });

    const existingProgress = await Progress.findOne({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });

    if (existingProgress) {
      // existingProgress.patience_score = req.body.patienceScore;
      // existingProgress.nonreactivity_score = req.body.nonreactivityScore;
      existingProgress.acceptance_score = req.body.acceptanceScore;
      // existingProgress.gratitude_score = req.body.gratitudeScore;
      // existingProgress.total_score = req.body.totalScore;
      await existingProgress.save();
      console.log("Progress updated successfully");
    } else {
      const newProgress = await Progress.create({
        user_id: user_id,
        patience_score: req.body.patienceScore || 0,
        nonreactivity_score: req.body.nonreactivityScore || 0,
        acceptance_score: req.body.acceptanceScore || 0,
        gratitude_score: req.body.gratitudeScore || 0,
        total_score: req.body.totalScore || 0,
      });
    }

    return res.json({ msg: "task finished" });
  } catch (error) {
    console.log(
      "failed to finish acceptance in task controller. error :",
      error
    );
    res.sendStatus(403);
  }
};
export const finishGratitude = async (req, res) => {
  const { taskId, date, user_id } = req.body;

  try {
    const record = await Gratitude.findByPk(taskId);
    if (!record) return res.json({ msg: "error. couldn't find task" });
    await record.update({ finished: 1 });

    const existingProgress = await Progress.findOne({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });

    if (existingProgress) {
      // existingProgress.patience_score = req.body.patienceScore;
      // existingProgress.nonreactivity_score = req.body.nonreactivityScore;
      // existingProgress.acceptance_score = req.body.acceptanceScore;
      existingProgress.gratitude_score = req.body.gratitudeScore;
      // existingProgress.total_score = req.body.totalScore;
      await existingProgress.save();
      console.log("Progress updated successfully");
    } else {
      const newProgress = await Progress.create({
        user_id: user_id,
        patience_score: req.body.patienceScore || 0,
        nonreactivity_score: req.body.nonreactivityScore || 0,
        acceptance_score: req.body.acceptanceScore || 0,
        gratitude_score: req.body.gratitudeScore || 0,
        total_score: req.body.totalScore || 0,
      });
    }

    return res.json({ msg: "task finished" });
  } catch (error) {
    console.log(
      "failed to finish gratitude in task controller. error :",
      error
    );
    res.sendStatus(403);
  }
};
