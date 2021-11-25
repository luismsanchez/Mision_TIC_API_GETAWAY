const accountResolver = {
    Query: {
        accountByUsername: async (_, { username }, {dataSources}) => {
            return await dataSources.accountApi.accountByUsernameRequest(username);
        }
    }
};

module.exports = accountResolver;