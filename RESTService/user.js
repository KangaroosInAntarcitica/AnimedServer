const createUserRouter = (express, controllers, oauth, bodyParser) => {
    const {userController} = controllers;

    const userRouter = express.Router();
    userRouter.use(bodyParser.urlencoded({ extended: true }));

    userRouter.post("/register", async (req, res) => {
        const body = req.body;
        if (await userController.userExists(body.username)) {
            res.status(400).json({'error': "User exists"});
            return;
        }

        let user = await userController.addUser(body.username, body.password, body.name);
        if (user)
            res.status(200).json({success: true});
        else
            res.status(422).json({error: "Unprocessable entity"});
    });

    userRouter.post('/login', oauth.grant());

    userRouter.get("/restrictedArea", oauth.authorise(), (req, res) => {
        res.json({"message": "Wohooo!"});
    });

    return userRouter;
};

module.exports = createUserRouter;
