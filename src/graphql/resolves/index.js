import GraphQLDate from 'graphql-date';
import NewsResolvers from './news-resolvers';
import UserResolvers from './user-resolvers';

//При вызоме метода getNews вернет список новостей
export default {
    Date: GraphQLDate,
    Query: {
        getNew: NewsResolvers.getNew,
        getNews: NewsResolvers.getNews,
    },
    Mutation: {
        createNew: NewsResolvers.createNew,
        updateNew: NewsResolvers.updateNew,
        deleteNew: NewsResolvers.deleteNew,
        signup: UserResolvers.signup,
        login: UserResolvers.login
    }
};
