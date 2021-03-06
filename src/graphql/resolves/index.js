import GraphQLDate from 'graphql-date';
import NewsResolvers from './news-resolvers';
import UserResolvers from './user-resolvers';
import User from '../../models/User';

//При вызоме метода getNews вернет список новостей
export default {
    Date: GraphQLDate,
    New: {
        user: ({user}) => User.findById(user),
    },
    Query: {
        getNew: NewsResolvers.getNew,
        getNews: NewsResolvers.getNews,
        getUserNews: NewsResolvers.getUserNews,
        me: UserResolvers.me
    },
    Mutation: {
        createNew: NewsResolvers.createNew,
        updateNew: NewsResolvers.updateNew,
        deleteNew: NewsResolvers.deleteNew,
        signup: UserResolvers.signup,
        login: UserResolvers.login
    }
};
