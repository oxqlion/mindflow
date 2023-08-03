import { Sequelize } from "sequelize";

const db = new Sequelize("mindflow", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
