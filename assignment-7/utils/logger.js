import { createLogger, format, transports } from "winston";
import {} from "dotenv/config";

export default createLogger({
  transports: new transports.File({
    level: process.env.LOGGER_LEVEL,
    filename: "utils/logger.log",
    format: format.combine(
      format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
      format.align(),
      format.printf(
        (error) => `${error.level}: ${[error.timestamp]}: ${error.message}`
      )
    ),
  }),
});
