import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IBlog, IBlogIdentification} from "@/types/blog/interface";
import {LIST_ID, SINGLE_BLOG} from "../../../graphql/blog";
import client from "@/graphql/client";

interface Props {
    blog: IBlog
}


const Blog: NextPage<Props> = ({blog}) => {
    console.log(blog)
    return <div>
            <p>{blog?.id}</p>
            <p>{blog?.attributes?.title}</p>
            <p>{blog?.attributes?.description}</p>
        </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {data} = await client.query({query: LIST_ID})
    const ids: IBlogIdentification[] = data.blogPosts.data;
    const paths = ids.map(id => {
        return {params: {...id}}
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const {data} = await client.query({query: SINGLE_BLOG, variables: {id: params!.id}})
    const blog: IBlog = data.blogPosts.data[0];

    return {
        props: {
            blog
        }
    }

}

export default Blog
