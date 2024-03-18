import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cltvq9gd108rd07w8vx01o71h/master",
  documents: ["./src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/lib/types/generated/": {
      preset: "client-preset",
      plugins: ["typescript", "typescript-document-nodes"],
      overwrite: true,
    },
  },
};

export default config;
