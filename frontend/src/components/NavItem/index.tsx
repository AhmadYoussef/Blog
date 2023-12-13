import {NextPage} from "next";
import Link from "next/link";

interface Props {
    title: string
    isClickable: boolean
    blogId?: string
}

const Index: NextPage<Props> = ({title, isClickable, blogId}) => {
    if(isClickable && blogId) {
        return (
            <Link href={`/blog/${blogId}`}>{title}</Link>
        )
    } else {
        return (
            <p>{title}</p>
        )
    }
}

export default Index;
