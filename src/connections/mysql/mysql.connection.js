import Sequelize from "sequelize";

import { databaseConfig } from "$config/index.js";

const { mysql } = databaseConfig;

const MySQL = new Sequelize(mysql.database, mysql.username, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    options: {
      encrypt: false,
      enableArithAbort: false,
    },
  },
});

export default MySQL;
