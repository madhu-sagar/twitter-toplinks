const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.printf((info) => `${info.message}`),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '/logs', 'app.log'),
      level: 'info',
      maxsize: 500,
    }),
  ],
});

export default logger;
