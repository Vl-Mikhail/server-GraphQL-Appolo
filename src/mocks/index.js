import faker from 'faker';

import News from '../models/News';

const NEWS_TOTAL = 10;

//Создаем выйковые данные
export default async () => {
    try {
        await News.remove();

        await Array.from({ length: NEWS_TOTAL }).forEach(
            async () => await News.create({ text: faker.lorem.paragraphs(1) }),
        );
    } catch (error) {
        throw error;
    }
};