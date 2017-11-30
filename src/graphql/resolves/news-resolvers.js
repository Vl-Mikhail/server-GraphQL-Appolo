import News from '../../models/News';
import { requireAuth } from '../../services/auth';

// Подключение к базе данных
// fieldName(obj, args, context, info) { result }
// requireAuth выполняем на каждый запрос
export default {
    getNew: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return News.findById(_id);
        } catch (error) {
            throw error;
        }
    },

    getNews: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return News.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },

    //Получем статьи от Пользователя
    getUserNews: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return News.find({ user: user._id }).sort({ createdAt: -1 })
        } catch (error) {
            throw error;
        }
    },

    createNew: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return News.create({ ...args, user: user._id });
        } catch (error) {
            throw error;
        }
    },

    updateNew: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            // return News.findByIdAndUpdate(_id, rest, { new: true });

            // Обновлять может только тот кто создал статью
            const article = await News.findOne({ _id, user: user._id });

            if (!article) {
                throw new Error('Not found!');
            }

            Object.entries(rest).forEach(([key, value]) => {
                article[key] = value;
            });

            return article.save();
        } catch (error) {
            throw error;
        }
    },

    deleteNew: async (_, { _id }) => {
        try {
            const article = await News.findOne({ _id, user: user._id });

            if (!article) {
                throw new Error('Not found!');
            }

            await article.remove();
            return {
                message: 'Delete Success!',
            };
        } catch (error) {
            throw error;
        }
    },
};
