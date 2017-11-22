import New from '../../models/News';

//возвращает все объекты, которые соответствуют критерию фильтрации из Mongo
export default {
    getNews: () => New.find({}),
};