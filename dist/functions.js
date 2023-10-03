"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.srvLogMsg = void 0;
const srvLogMsg = () => {
    return `[${new Date().toLocaleTimeString()}] server:`;
};
exports.srvLogMsg = srvLogMsg;
