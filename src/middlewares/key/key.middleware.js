import { appConfig } from "$config/index.js";

const key = async (req, res, next) => {
  const { apikey } = req.headers;

  if (!apikey) {
    return res.status(401).send({ message: "Unautorized" });
  }

  if (apikey !== appConfig.key) {
    return res.status(401).send({ message: "Unautorized" });
  }

  next();
};

export default key;
