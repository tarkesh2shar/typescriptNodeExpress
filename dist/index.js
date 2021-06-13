"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./app/logger"));
var bootstrapper_1 = require("@utilitiesfornodejs/bootstrapper");
var expressLoader_1 = require("./app/loaders/expressLoader");
var winstonLoader_1 = require("./app/loaders/winstonLoader");
bootstrapper_1.startBootstrapProcess({
    config: {
        showBootstrapTime: true,
        logo: "tarkesh2shar"
    },
    loaders: [
        winstonLoader_1.winstonLoader,
        expressLoader_1.expressLoader
    ]
}).then(function (state) {
    return state.shutdown();
}).catch(function (err) { return logger_1.default.error('Application is crashed: ' + err); });
