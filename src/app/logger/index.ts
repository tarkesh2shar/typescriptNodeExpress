import { Logger } from 'winston';
import buildDevLogger from './dev-logger';
import buildProdLogger from './prod-logger';
let logger:Logger;
if (process.env.NODE_ENV === 'production') {
    logger = buildProdLogger();
} else {

  logger = buildDevLogger();
}
export default logger;