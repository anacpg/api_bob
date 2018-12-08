import winston from 'winston';

const logger = new winston.Logger();
const OPTIONS = { pid: process.pid };

logger.add(winston.transports.Console, {
  colorize: 'development',
  level: 'debug',
  showLevel: true,
  timestamp: true,
});

export default {
  error: (message) => {
    logger.error(message, OPTIONS);
  },
  debug: (message) => {
    logger.debug(message, OPTIONS);
  },
  info: (message) => {
    logger.info(message, OPTIONS);
  },
  warning: (message) => {
    logger.warn(message, OPTIONS);
  },
};
