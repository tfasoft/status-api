import env from "$env";

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  secret: env.APP_SECRET,
  key: env.APP_KEY,
  version: "1.0.0",
  published: env.APP_ENVIRONMENT === "production" ? true : false,
};
