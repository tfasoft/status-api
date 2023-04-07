import redis from "ioredis";

import { databaseConfig } from "$config/index.js";

const { redis_conf } = databaseConfig;

const client = new redis({
  host: redis_conf.host,
  port: redis_conf.port,
});

export default client;
