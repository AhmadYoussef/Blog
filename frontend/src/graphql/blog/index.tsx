import {gql} from "@apollo/client";

export const LIST_BLOG = gql(`
query {
  postBlogs {
   data{
     id
      attributes{
        Posts {
          id
          post{
            id
            title
            description
            image{
              data {
                id
              attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider_metadata
                }
              }
            }
          }
        }
      }
    }
  }
}
`)

export const SINGLE_BLOG = gql(`
query getId($id: ID){
blogPost(id: $id) {
    data {
      id
      attributes {
        Posts{
          Title
          Description
          Image {
            data{
              attributes {name alternativeText caption width height formats hash ext  mime size url previewUrl provider_metadata
              }
            }
          }
        }
      }
    }
  }
}
`)

export const LIST_ID = gql(`
query {
  blogPosts {
    data {
      id
    }
  }
}
`)
