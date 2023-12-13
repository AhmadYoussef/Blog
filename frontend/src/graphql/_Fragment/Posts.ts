import {Post} from "@/graphql/_Fragment/Post";

export const Posts = `
fragment Posts on ComponentPostsContainer {
  id 
  post {
    ...Post
  }
}

${Post}
`;
