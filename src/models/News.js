import mongoose, { Schema } from 'mongoose';

const NewsSchema = new Schema({
    text: String,
});

//создаем модель
export default mongoose.model('News', NewsSchema);