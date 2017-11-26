/**
 * Создаем объект New
 * Создаем результат запроса, и возращает данные
 * Добавлем запрос в схему
 * Status - результат удаления
 * scalar Date - обрабатываем с помошью graphql-date
 * Auth - содержит token JWT (Header.Payload.Signature)
 */
// language=GraphQL
export default `
    scalar Date
    
    type Status {
        message: String!
    }

    type Auth {
        token: String!    
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

    type Me {
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
        me: Me
    }

    # this schema allows the following mutation:
    type Mutation {
        createNew(text: String!): New
        updateNew(_id: ID!, text: String): New
        deleteNew(_id: ID!): Status
        signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
        login(email: String!, password: String!): Auth
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`;