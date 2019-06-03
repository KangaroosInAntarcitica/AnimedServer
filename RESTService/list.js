const createCourseRouter = (express, controllers, oauth, bodyParser) => {
    const {listController} = controllers;

    const listRouter = express.Router();

    listRouter.get('/allCourses', oauth.authorise(), async (req, res) => {
        const search = req.query.search;
        const courses = await listController.getAllCourses(search);
        res.json({data: courses, success: true});
    });

    listRouter.get('/allArticles', oauth.authorise(), async (req, res) => {
        const search = req.query.search;
        const articles = await listController.getAllArticles(search);
        res.json({data: articles, success: true});
    });

    return listRouter;
};

module.exports = createCourseRouter;