import News from '../../models/News';

// Подключение к базе данных
// fieldName(obj, args, context, info) { result }
export default {
    getNew: (_, {_id}) => News.findById(_id),
    getNews: () => News.find({}),
    createNew: (_, args) => News.create(args),
    // { new: true } - Возращает объект после обновления
    updateNew: (_, { _id, ...rest }) => News.findByIdAndUpdate(_id, rest, { new: true }),
    deleteNew: async (_, { _id }) => {
        try {
            await News.findByIdAndRemove(_id);
            return {
                message: 'Успешно удалено!'
            }
        } catch (error) {
            throw error;
        }
    }
};