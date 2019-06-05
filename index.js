const express = require("express");
const bodyParser = require("body-parser");
const oAuth2Server = require("node-oauth2-server");
const path = require("path");

// const _ = require('./createDataBase');

const {User, AccessToken} = require("./models");

const controllers = require("./databaseController");
const authController = require("./authController")(controllers.userController);

const app = express();

const oauth2 = oAuth2Server({
    model: authController,
    grants: ['password'],
    debug: true
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

const userRouter = require("./RESTService/user")(express, controllers, oauth2, bodyParser);
app.use("/user", userRouter);

const articleRouter = require("./RESTService/article")(express, controllers, oauth2, bodyParser);
app.use("/article", articleRouter);

const courseRouter = require("./RESTService/course")(express, controllers, oauth2, bodyParser);
app.use("/course", courseRouter);

const listRouter = require("./RESTService/list")(express, controllers, oauth2, bodyParser);
app.use("/list", listRouter);


const redirectRouter = require("./RESTService/redirect")(express);
app.use("/", redirectRouter);

app.get("/animed", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/dist/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist/bundle.js"));
});

app.get("/fonts_dist/:fontName", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "fonts_dist", req.params.fontName));
});


app.listen(process.env.PORT || 5000, () => {
    console.log("[Server] started")
});

