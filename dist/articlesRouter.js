"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IArticle_1 = require("./models/IArticle");
const router = express_1.default.Router();
router.put('/:id/like', (req, res) => {
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
router.post('/:id/comments', (req, res) => {
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
exports.default = router;
