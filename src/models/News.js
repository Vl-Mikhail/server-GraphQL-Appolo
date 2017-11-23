import mongoose, { Schema } from 'mongoose';


// {timestamps: true} - Добавляем два поля createdAt и updatedAt
const NewsSchema = new Schema({
    text: String,
}, {timestamps: true});

// Создаем модель
export default mongoose.model('News', NewsSchema);