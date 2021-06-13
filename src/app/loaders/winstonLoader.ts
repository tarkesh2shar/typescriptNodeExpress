import {BootstrapState} from "@utilitiesfornodejs/bootstrapper";
import buildDevLogger from '../logger/dev-logger';
import buildProdLogger from '../logger/prod-logger';
import { Logger } from 'winston';
import {BootstrapEnum} from '../enums/bootStrapper'

export function winstonLoader(state: BootstrapState) {
    let logger:Logger;
    if (process.env.NODE_ENV === 'production') {
        logger = buildProdLogger();
    } else {
    
      logger = buildDevLogger();
    }
    state.setData(BootstrapEnum.LOGGER, logger);
}
