"use strict";

const app = require("./app");
const logger = require("./utils/logger");

app.listen(process.env.SERVER_PORT, () =>
  logger.info(`Server running on *:${process.env.SERVER_PORT}`)
);
