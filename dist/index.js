"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./functions");
const articlesRouter_1 = __importDefault(require("./articlesRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
main().catch((err) => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (MONGODB_URI === '') {
            console.log((0, functions_1.srvLogMsg)(), 'Database URI is empty, check .env file!');
        }
        yield mongoose_1.default.connect(MONGODB_URI);
        console.log((0, functions_1.srvLogMsg)(), 'Database connected');
    });
}
app.use('/api/articles', articlesRouter_1.default);
app.listen(port, () => {
    console.log(`${(0, functions_1.srvLogMsg)()} Server is running at http://localhost:${port}`);
});
