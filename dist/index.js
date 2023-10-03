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
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./functions");
const IArticle_1 = require("./models/IArticle");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
const MONGODB_URI = 'mongodb://127.0.0.1:27017/react-blog';
main().catch((err) => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(MONGODB_URI);
        console.log('Database connected');
    });
}
app.put('/api/articles/:id/like', (req, res) => {
    const { id } = req.params;
    const article = IArticle_1.mockArticles.find((article) => article.id === id);
    if (article) {
        article.likes += 1;
        res.status(200).json(article.likes);
        console.log(article.comments);
    }
    else {
        res.send('not found');
    }
});
app.post('/api/articles/:id/comments', (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    const article = IArticle_1.mockArticles.find((article) => article.id === id);
    if (article) {
        article.comments.push(comment);
        res.status(200).json(article.comments);
        console.log(article.comments);
    }
    else {
        res.send('not found');
    }
});
app.listen(port, () => {
    console.log(`[server] - ${(0, functions_1.logTime)()}: Server is running at http://localhost:${port}`);
});
