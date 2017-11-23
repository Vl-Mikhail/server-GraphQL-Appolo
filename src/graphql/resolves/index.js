import GraphQLDate from 'graphql-date';
import NewsResolvers from './news-resolvers';

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
        deleteNew: NewsResolvers.deleteNew
    }
};
