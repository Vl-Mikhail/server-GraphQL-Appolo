/**
 * Создаем объект New
 * Создаем результат запроса, и возращает массив
 * Добавлем запрос в схему
 */
// language=GraphQL
export default `
  type New {
    _id: String
    text: String
  }

  # the schema allows the following query:
  type Query {
    getNews: [New]
  }

  schema {
    query: Query
  }
`;