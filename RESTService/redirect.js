module.exports = (express) => {
    redirectRouter = express.Router();

    redirectRouter.get("/", (req, res) => {
        res.redirect("/animed");
    });

    return redirectRouter;
};