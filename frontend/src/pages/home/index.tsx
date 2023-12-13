import {GetServerSideProps, NextPage} from "next";
import client from "@/graphql/client";
import {HOME} from "@/graphql/home";
import {IHome} from "@/types/Home/interface";

interface Props {
    data: IHome[]
}

const Home: NextPage<Props> = ({data}) => {
    console.log(data);
    return (<>
            <p>Home</p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await client.query({query: HOME})
    const data: IHome[] = res.data.home.data;

    return {
        props: {
            data
        }
    }
}

export default Home;
