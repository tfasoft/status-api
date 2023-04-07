import { appConfig } from "$config/index.js";

import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, appConfig.secret, { expiresIn: "7d" });
};

export { createToken };
