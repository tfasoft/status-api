import app from "./src/index.js";

import chalk from "chalk";

import { MySQL, Redis } from "$connections/index.js";
import { appConfig } from "$config/index.js";

Redis.on("connect", () => console.log("Redis connected"));

MySQL.authenticate()
  .then(() => {
    chalk.green(console.log("MySQL connected"));
    app.listen(appConfig.port, () =>
      chalk.green(console.log(`App is running on ${appConfig.port}`))
    );
  })
  .catch((error) => {
    console.log(chalk.red("Unable to connect to the MySQL: ", error.message));
  });
