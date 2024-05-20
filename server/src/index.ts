import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

const mocks = {
  Query: () => ({
    // * tracksForHomeクエリが呼び出されたときに、長さが n で各要素がundefinedの配列を返すという意味です。
    tracksForHome: () => [...new Array(6)], // [undefined, undefined]
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  // 省略形プロパティ記法: { typeDefs: typeDefs } は { typeDefs } と書ける
  // 省略形プロパティ記法 は、オブジェクトリテラルの作成時に使用されます。
  // const server = new ApolloServer({ typeDefs });

  // * モックをスキーマに追加する
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
`);
}

startApolloServer();
