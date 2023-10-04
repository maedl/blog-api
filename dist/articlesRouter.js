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
const IArticle_1 = require("./models/IArticle");
const router = express_1.default.Router();
router.post('/new-article', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const articleData = req.body;
    const newArticle = new IArticle_1.Article(articleData);
    try {
        const savedArticle = yield newArticle.save();
        res.status(200).json(savedArticle);
    }
    catch (error) {
        res.status(500).json({ message: 'Error saving the article', error });
    }
}));
router.put('/:id/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const article = yield IArticle_1.Article.findById(id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        article.likes += 1;
        yield article.save();
        res.status(200).json(article.likes);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error updating likes');
    }
}));
router.post('/:id/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { comment } = req.body;
    try {
        const article = yield IArticle_1.Article.findById(id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        article.comments.push(comment);
        yield article.save();
        res.status(200).json(article.comments);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error adding comment');
    }
}));
exports.default = router;
