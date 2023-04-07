const ip = (req, res, next) => {
  const headers = req.headers;
  const whitelist = [];

  const coming = headers["x-forwarded-for"];

  if (!whitelist.includes(coming)) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  next();
};

export default ip;
