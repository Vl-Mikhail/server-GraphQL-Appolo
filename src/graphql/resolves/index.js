import NewsResolvers from './news-resolvers';

//При вызоме метода getNews вернет список новостей
export default {
    Query: {
        getNews: NewsResolvers.getNews,
    },
};
