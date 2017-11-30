import faker from 'faker';

import News from '../models/News';
import User from '../models/User';

const NEWS_TOTAL = 3;
const USERS_TOTAL = 3;

//Создаем выйковые данные
export default async () => {
    try {
        await News.remove();
        await User.remove();

        await Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
            const user = await User.create({
                username: faker.internet.userName(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
                password: 'password123'
            });

            await Array.from({ length: NEWS_TOTAL }).forEach(
                async () => await News.create({ text: faker.lorem.sentence(), user: user._id }),
            );
        });
    } catch (error) {
        throw error;
    }
};