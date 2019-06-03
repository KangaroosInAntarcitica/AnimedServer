const authController = userController => ({
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
        userController.saveToken(accessToken, user.id, expires)
            .then(token => callback(false, token));
    },

    getUser: (username, password, callback) => {
        userController.getUserFromCredentials(username, password)
            .then(user => callback(false, user));
    },

    grantTypeAllowed: (clientID, grantType, callback) => {
        callback(false, true);
    },

    getAccessToken: (bearerToken, callback) => {
        userController.getUserIdFromToken(bearerToken)
            .then((userId) => {
                const accessToken = { user: { id: userId }, expires: null };

                callback(!userId, userId == null ? null : accessToken)
            });
    }
});

module.exports = authController;