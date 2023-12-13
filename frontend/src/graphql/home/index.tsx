import {gql} from "@apollo/client";
import {Posts} from "@/graphql/_Fragment/Posts";

export const HOME = gql(`
query {
  home {
    data {
        id
        attributes {
        posts{
          ...Posts
        }
      }
    }
  }
}

${Posts}
`)
