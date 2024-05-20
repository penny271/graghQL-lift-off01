// * GraphQL文字列を、操作やスキーマを扱う際にApolloライブラリが期待する形式に変換し、構文の強調表示も可能にします。
import gql from "graphql-tag"; // gqlはGraphQL文字列を操作するためのタグ関数

export const typeDefs = gql`
  # このタイプのフィールドは、スキーマの残りの部分へのエントリポイントです。これらはクライアントがクエリできるトップレベルのフィールドです。
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    # Fields go here
    id: ID!
    name: String!
    photo: String
  }
`;
