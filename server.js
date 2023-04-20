import app from "./src/index.js";

import chalk from "chalk";

import { appConfig } from "$config/index.js";

app.listen(appConfig.port, () =>
  chalk.green(console.log(`App is running on ${appConfig.port}`))
);
