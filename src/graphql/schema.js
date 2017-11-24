/**
 * Создаем объект New
 * Создаем результат запроса, и возращает данные
 * Добавлем запрос в схему
 * Status - результат удаления
 * scalar Date - обрабатываем с помошью graphql-date
 */
// language=GraphQL
export default `
    scalar Date
    
    type Status {
        message: String!
    }

    type User {
        _id: ID!
        username: String
        email: String!
        firstName: String
        lastName: String
        avatar: String
        createdAt: Date!
        updatedAt: Date!
    }
    
    type New {
        _id: ID!
        text: String
        createdAt: Date!
        updatedAt: Date!
    }

    # the schema allows the following query:
    type Query {
        getNew(_id: ID!): New
        getNews: [New]
    }

    # this schema allows the following mutation:
    type Mutation {
        createNew(text: String!): New
        updateNew(_id: ID!, text: String): New
        deleteNew(_id: ID!): Status
        signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
        login(email: String!, password: String!): User
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`;