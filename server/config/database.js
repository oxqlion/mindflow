import { Sequelize } from "sequelize";

const db = new Sequelize("mindflow", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone:"+07:00"
});

export default db;
