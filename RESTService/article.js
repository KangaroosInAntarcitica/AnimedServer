const createArticleRouter = (express, controllers, oauth, bodyParser) => {
    const { articleController } = controllers;

    const articleRouter = express.Router();

    articleRouter.get("/:id", oauth.authorise(), async (req, res) => {
        const id = req.params.id;
        const userId = req.user.id;

        const article = await articleController.getInfo(id, userId);
        if (!article) {
            res.status(404).json({error: "Article doesn't exist"});
        } else {
            res.json({data: article});
        }
    });

    articleRouter.post("/", oauth.authorise(), bodyParser.json(), async (req, res) => {
        const {name, content} = req.body;
        const authorId = req.user.id;

        const article = await articleController.addArticle(authorId, name, content);
        if (article) {
            res.json({success: true, data: article});
        } else {
            res.status(422).json({error: "Unprocessable entity"})
        }
    });

    articleRouter.put("/:id/feedback", oauth.authorise(), bodyParser.json(), async (req, res) => {
        const userId = req.user.id;
        const articleId = req.params.id;
        const feedback = req.body;

        const data = await articleController.setArticleFeedback(articleId, userId, feedback);
        if (data) {
            res.json({success: true, data})
        } else {
            res.status(422).json({error: "Author cannot rate his article"});
        }
    });

    return articleRouter;
};

module.exports = createArticleRouter;
