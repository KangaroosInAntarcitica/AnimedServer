const express = require("express");
const bodyParser = require("body-parser");
const oAuth2Server = require("node-oauth2-server");

const userDb = {};
const tokenDb = {};
let id = 0;

const {User, AccessToken} = require("./models");

const dbModel = {
    saveAccessToken: (accessToken, userID, expires, callback) => {
        expires = expires.getTime();
        AccessToken.create({userID, token: accessToken, expires})
            .then(() => callback());
    },

    getUserIDFromBearerToken: (accessToken, callback) => {
        AccessToken.findOne({where: {token: accessToken}})
            .then(token => console.log(token) || callback(token.userID));
    },

    registerUserInDB: (username, password, callback) => {
        User.create({username, password})
            .then((user) => callback());
    },

    getUserFromCrentials: (username, password, callback) => {
        User.findOne({where: {username, password}})
            .then(user => console.log(user) || callback(false, user));
    },

    doesUserExist: (username, callback) => {
        User.findOne({where: {username}})
            .then((user) => (user) || callback(false, !!user));
    }
};

const accessTokenModel = {
    getClient: (clientID, clientSecret, callback) => {
        const client = {
            clientID,
            clientSecret,
            grants: null,
            redirectUris: null
        };

        callback(false, client);
    },

    saveAccessToken: (accessToken, clientID, expires, user, callback) => {
        dbModel.saveAccessToken(accessToken, user.id, expires, callback)
    },

    getUser: (username, password, callback) => {
        console.log("get-user")
        dbModel.getUserFromCrentials(username, password, callback);
    },

    grantTypeAllowed: (clientID, grantType, callback) => {
        callback(false, true);
    },

    getAccessToken: (bearerToken, callback) => {
        console.log("get-access-token")

        dbModel.getUserIDFromBearerToken(bearerToken, (userID) => {
            const accessToken = {
                user: {
                    id: userID,
                },
                expires: null
            };

            callback(!userID, userID == null ? null : accessToken)
        });
    }
};

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const oauth2 = oAuth2Server({
    model: accessTokenModel,
    grants: ['password'],
    debug: true
});

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
    const body = req.body;
    dbModel.doesUserExist(body.username, (error, exists) => {
        if (exists) {
            res.status(400).json({'error': "User exists"});
            return;
        }

        dbModel.registerUserInDB(body.username, body.password, (error) => {
            res.status(200).json({message: "Success!", user: {username: body.username, password: body.password}});
        });
    });
});

authRouter.post('/login', oauth2.grant());

authRouter.get("/restirctedArea", oauth2.authorise(), (req, res) => {
    res.json({"message": "Wohooo!"});
});

app.use("/auth", authRouter);

const debugRouter = express.Router();
debugRouter.get("/", (req, res) => {
    res.status(200).json({users: userDb, tokens: tokenDb});
});
app.use("/debug", debugRouter);

app.listen(3000, () => {
    console.log("[Server] started")
});

