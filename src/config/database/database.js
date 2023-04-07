import env from "$env";

export default {
  mysql: {
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    database: env.MYSQL_NAME,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
  },
  mongodb: {
    atlas: env.MONGO_ATLAS,
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    collection: env.MONGO_COLLECTION,
  },
  redis_conf: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
  },
};
