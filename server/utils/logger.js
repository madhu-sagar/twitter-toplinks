// const _ = require('lodash');
// const path = require('path');
// const fs = require('fs-extra');

// const { transports, createLogger, format } = require('winston');
// const formatTimestampToString = require('./utils');

// const basePath = process.env.BASEPATH || '';

// const LOGS_DIR = [basePath, 'logs'].join(path.sep);
// const APP_LOG_FILE_PATH = [LOGS_DIR, 'app.log'].join(path.sep);
// const EXCEPTIONS_LOG_FILE_PATH = [LOGS_DIR, 'exceptions.log'].join(path.sep);

// // create the logs directory if does not exist
// fs.ensureDirSync(LOGS_DIR);

// const myFormat = format.printf(({ level, message }) => {
//   const timestamp = formatTimestampToString(new Date(), true);
//   const templevel = _.toUpper(level);
//   const output = `${timestamp} | ${templevel} | ${message}`;
//   return output;
// });

// const logger = createLogger({
//   level: 'debug',
//   format: myFormat,
//   transports: [
//     new transports.Console({ json: false, timestamp: true }),
//     new transports.File({ filename: APP_LOG_FILE_PATH, json: false, timestamp: true }),
//   ],
//   exceptionHandlers: [
//     new transports.Console({ json: false, timestamp: true }),
//     new transports.File({ filename: EXCEPTIONS_LOG_FILE_PATH, json: false, timestamp: true }),
//   ],
//   exitOnError: false,
// });

// module.exports = logger;
