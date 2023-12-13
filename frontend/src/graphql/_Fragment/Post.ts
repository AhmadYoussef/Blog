import {Image} from "@/graphql/_Fragment/Image";

export const Post = `
fragment Post on ComponentPostsItem {
    id 
    title
    description
    image {
        ...Image
  }
}

${Image}
`;
