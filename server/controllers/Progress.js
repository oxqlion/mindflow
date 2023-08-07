import Progress from "../models/ProgressModel.js";
import { Op } from "sequelize";

export const getProgress = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const response = await Progress.findOne({
      where: {
        user_id: user_id,
        date: {
          [Op.substring]: `${date}%`,
        },
      },
    });
    console.log("berhasil dapet progress");
    console.log("Get progress di progress js backend get progress : ", response.journal);
    res.json({ progress: response });
  } catch (error) {
    console.log("Error getting progress in progress js backend : ", error);
    res.sendStatus(404);
  }
};

export const getAllProgress = async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const response = await Progress.findAll({
      where: {
        user_id: user_id,
      },
    });
    console.log("berhasil dapet progress");
    console.log("Get progress di progress js backend : ", response);
    res.json({ progress: response });
  } catch (error) {
    console.log("Error getting progress in progress js backend : ", error);
    res.sendStatus(404);
  }
};
