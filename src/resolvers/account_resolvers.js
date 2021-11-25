const accountResolvers = {
    Query: {
        accountByUsername: async (_, { username }, {dataSources}) => {
            return await dataSources.accountApi.accountByUsernameRequest(username);
        }
    },
    Mutation: {

    }
};

module.exports = accountResolvers;