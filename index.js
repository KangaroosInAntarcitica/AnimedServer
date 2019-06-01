const express = require("express");
const bodyParser = require("body-parser");
const oAuth2Server = require("node-oauth2-server");

const userDb = {};
const tokenDb = {};
let id = 0;


const dbModel = {
    saveAccessToken: (accessToken, userID, expires, callback) => {
        tokenDb[accessToken] = {userID, expires};
        callback();
    },

    getUserIDFromBearerToken: (accessToken, callback) => {
        callback(tokenDb[accessToken].userID);
    },

    registerUserInDB: (username, password, callback) => {
        userDb[username] = {username, password, id: ++id};
        callback();
    },

    getUserFromCrentials: (username, password, callback) => {
        callback(false, userDb[username] && userDb[username].password === password ? {...userDb[username]} : null);
    },

    doesUserExist: (username, callback) => {
        callback(false, !!userDb[username]);
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
        dbModel.getUserFromCrentials(username, password, callback);
    },

    grantTypeAllowed: (clientID, grantType, callback) => {
        callback(false, true);
    },

    getAccessToken: (bearerToken, callback) => {
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

