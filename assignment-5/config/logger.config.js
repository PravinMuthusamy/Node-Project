const { createLogger, format, transports } = require("winston");
require("dotenv").config();
module.exports = createLogger({
  transports: [
    new transports.File({
      level: process.env.LOGGER_LEVEL,
      filename: "./logs/logs.log",
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (error) => `${error.level}: ${[error.timestamp]}: ${error.message}`
        )
      ),
    }),
    new transports.File({
      level: "info",
      filename: "./logs/entryLog.log",
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),
  ],
});
