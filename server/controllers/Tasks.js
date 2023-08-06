import { Op } from "sequelize";
import Results from "../models/ResultModel.js";

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
