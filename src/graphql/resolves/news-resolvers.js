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

    createNew: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return News.create(args);
        } catch (error) {
            throw error;
        }
    },

    updateNew: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return News.findByIdAndUpdate(_id, rest, { new: true });
        } catch (error) {
            throw error;
        }
    },

    deleteNew: async (_, { _id }) => {
        try {
            await News.findByIdAndRemove(_id);
            return {
                message: 'Delete Success!',
            };
        } catch (error) {
            throw error;
        }
    },
};
