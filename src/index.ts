import logger from './app/logger';
import {startBootstrapProcess,BootStrapLoader} from "@utilitiesfornodejs/bootstrapper"
import {expressLoader} from './app/loaders/expressLoader';
import {winstonLoader} from './app/loaders/winstonLoader';

startBootstrapProcess({
    config:{
        showBootstrapTime:true,
        logo:"tarkesh2shar"
    },
    loaders:[
        winstonLoader  as BootStrapLoader, 
        expressLoader as BootStrapLoader 
       
    ]
}).then((state)=>{
    
    return state.shutdown()
     
}).catch(err=> logger.error('Application is crashed: ' + err));









