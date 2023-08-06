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
        }
    })
    res.json({ progress: response })
  } catch (error) {
    console.log("Error getting progress in progress js backend : ", error);
    res.sendStatus(404);
  }
};
