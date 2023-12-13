import {NextPage} from "next";
import {IBlog} from "@/types/blog/interface";
import NavItem from "../NavItem";

interface Props {
    blogs: IBlog[]
}

const Index: NextPage<Props> = ({blogs}) => {
    return (
        <div>
            {blogs.map((blog, i) => {
                return (
                    <div key={i}>
                        <NavItem
                            title={blog.attributes.title}
                            isClickable={true}
                            blogId={blog.id}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default Index;
