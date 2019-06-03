const createCourseRouter = (express, controllers, oauth, bodyParser) => {
    const { courseController } = controllers;

    const courseRouter = express.Router();

    courseRouter.get("/:id", oauth.authorise(), async (req, res) => {
        const id = req.params.id;
        const userId = req.user.id;

        const course = await courseController.getInfo(id, userId);
        if (!course) {
            res.status(404).json({error: "Course doesn't exist"});
        } else {
            res.json({data: course});
        }
    });

    courseRouter.post("/", oauth.authorise(), bodyParser.json(), async (req, res) => {
        const {name, description} = req.body;
        const authorId = req.user.id;

        const course = await courseController.addCourse(name, description, authorId);
        if (course) {
            res.json({success: true, data: course});
        } else {
            res.status(422).json({error: "Unprocessable entity"})
        }
    });

    courseRouter.post("/section", oauth.authorise(), bodyParser.json(), async (req, res) => {
        const {name, description, courseId} = req.body;
        const authorId = req.user.id;

        if (!await courseController.checkAuthor(courseId, authorId)) {
            res.status(403).json({error: "Non-author user cannot add a section"})
        }

        const section = await courseController.addSection(courseId, name, description);
        if (section) {
            res.json({success: true, data: section});
        } else {
            res.status(422).json({error: "Unprocessable entity"})
        }
    });

    courseRouter.post("/article", oauth.authorise(), bodyParser.json(), async (req, res) => {
        const {sectionId, articleId} = req.body;
        const authorId = req.user.id;

        if (!await courseController.checkSectionAuthor(sectionId, authorId)) {
            res.status(403).json({error: "Non-author user cannot add a section"})
        }

        const article = await courseController.linkArticle(sectionId, articleId);
        if (article) {
            res.json({success: true});
        } else {
            res.status(422).json({error: "Unprocessable entity"})
        }
    });

    courseRouter.put("/:id/feedback", oauth.authorise(), bodyParser.json(), async (req, res) => {
        const userId = req.user.id;
        const courseId = req.params.id;
        const feedback = req.body;

        const data = await courseController.setCourseFeedback(courseId, userId, feedback);
        if (data) {
            res.json({success: true, data})
        } else {
            res.status(422).json({error: "Cannot add feedback as author"});
        }
    });

    return courseRouter;
};

module.exports = createCourseRouter;
