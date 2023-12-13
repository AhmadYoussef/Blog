import {GetServerSideProps, NextPage} from "next";
import {IBlog} from "@/types/blog/interface";
import client from "@/graphql/client";
import {LIST_BLOG} from "@/graphql/blog";
import Nav from "@/components/Nav";

interface Props {
    blogs: IBlog[]
}

const Blog: NextPage<Props> = ({blogs}) => {
    console.log(blogs);
    return (<>
            <p>About Page</p>
            <Nav blogs={blogs}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const {data} = await client.query({query: LIST_BLOG})
    const blogs: IBlog[] = data.postBlogs.data;

    return {
        props: {
            blogs
        }
    }
}

export default Blog;
