import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
}, { timestamps: true });

//Обновляем hash пароля только елси он изменен
UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

// Определяем метод в нашей модели
UserSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
};


export default mongoose.model('User', UserSchema);