import mongoose from 'mongoose';
import constants from './constants';

// для работы с promise
mongoose.Promise = global.Promise;
mongoose.set('debug', true); // debug mode on

try {
    // подключение
    mongoose.connect(constants.DB_URL, {
        useMongoClient: true,
    });
} catch (err) {
    mongoose.createConnection(constants.DB_URL, {
        useMongoClient: true,
    });
}


mongoose.connection
    .once('open', () => console.log('MongoDB Running'))
    .on('error', e => {
        throw e;
    });