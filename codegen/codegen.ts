import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://fullnode-service-api.dev.chainverse.xyz/graphql",
  generates: {
    "schema/schema.json": {
      plugins: ["introspection"],
      config: {
        minify: false,
      },
    },
    "schema/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/apollo/possibleTypes.json": {
      plugins: ["fragment-matcher"],
    },
  },
  config: {
    namingConvention: "keep",
    apolloClientVersion: 3,
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};
export default config;
