import  express from "express";
import {BootstrapState} from "@utilitiesfornodejs/bootstrapper";
import {AppRouter as Router} from '../singletons/router';
import {BootstrapEnum} from '../enums/bootStrapper'
import winston from "winston";
import {InitializeDecorators} from 'expressydecorators'

export function expressLoader(state: BootstrapState) {
    const app = express();
    app.use(Router.getInstance());
    InitializeDecorators(Router.getInstance());
    require ('../controllers/LoginControllers');
    app.listen(3000);
    state.setData(BootstrapEnum.EXPRESS_APP, app);
    state.setData(BootstrapEnum.EXPRESS_ROUTER,Router.getInstance())
    let logger:winston.Logger =state.getData(BootstrapEnum.LOGGER)
    state.shutDown(()=>{
        logger.info("shutting down  express App")
    })
}