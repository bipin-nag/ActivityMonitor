import { graphql } from "@octokit/graphql";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const gqlClient = graphql.defaults({
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});
