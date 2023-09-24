"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./functions");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript server');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('hello');
});
app.listen(port, () => {
    console.log(`[server] ${(0, functions_1.logTime)()}: Server is running at http://localhost:${port}`);
});
