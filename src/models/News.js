import mongoose, { Schema } from 'mongoose';


// {timestamps: true} - Добавляем два поля createdAt и updatedAt
const NewsSchema = new Schema({
    text: {
        type: String,
        minlength: [5, 'Text need to be longer'],
        maxlength: [500, 'Text too long'],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    favoriteCount: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

// Создаем модель
export default mongoose.model('News', NewsSchema);