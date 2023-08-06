import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

// const { DataTypes } = Sequelize;

const Patience = db.define(
  "patience",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    result_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    journal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    finished: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Patience;
