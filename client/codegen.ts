import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      // * デフォルトでは、Code Generatorはこの関数をgraphqlとしてエクスポートします。しかし、gqlという命名規則を維持するために、名前を変更するオプションがあります。これは、presetConfigという追加のプロパティをpresetの下に設定することで可能です。
      // 使用する場合: const MY_QUERY = gql`` / 使用しない場合: const MY_QUERY = graphql``
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  // ファイルが見つからないエラーを無視する
  // ignoreNoDocuments: true,
};

export default config;
