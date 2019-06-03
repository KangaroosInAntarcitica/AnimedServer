const express = require("express");
const bodyParser = require("body-parser");
const oAuth2Server = require("node-oauth2-server");

const {User, AccessToken} = require("./models");

const controllers = require("./databaseController");
const authController = require("./authController")(controllers.userController);

const app = express();

const oauth2 = oAuth2Server({
    model: authController,
    grants: ['password'],
    debug: true
});

const userRouter = require("./RESTService/user")(express, controllers, oauth2, bodyParser);
app.use("/user", userRouter);

const articleRouter = require("./RESTService/article")(express, controllers, oauth2, bodyParser);
app.use("/article", articleRouter);

const courseRouter = require("./RESTService/course")(express, controllers, oauth2, bodyParser);
app.use("/course", courseRouter);

const listRouter = require("./RESTService/list")(express, controllers, oauth2, bodyParser);
app.use("/list", listRouter);

const debugRouter = express.Router();
debugRouter.get("/", (req, res) => {
    res.status(200).json({users: userDb, tokens: tokenDb});
});
app.use("/debug", debugRouter);

app.listen(3000, () => {
    console.log("[Server] started")
});

