"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./functions");
const IArticle_1 = require("./models/IArticle");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.put('/api/articles/:id/like', (req, res) => {
    const { id } = req.params;
    console.log(id);
    const article = IArticle_1.mockArticles.find((article) => article.id === id);
    if (article) {
        article.likes += 1;
        res.status(200).json(article.likes);
    }
    else {
        res.send('not found');
    }
    console.log(IArticle_1.mockArticles[0]);
});
app.listen(port, () => {
    console.log(`[server] ${(0, functions_1.logTime)()}: Server is running at http://localhost:${port}`);
});
