import Head from 'next/head';
import Link from "next/link";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import Card from "../../components/Card";


export default function Search() {
    const router = useRouter();
    const data = router.query;


    return(
        <Layout
            // @ts-ignore
            title={data.title}>
            <div>
                {data.image}
                <Card
                    // @ts-ignore
                    title={data.name}
                    // @ts-ignore
                    imgUrl={data.image}
                    // @ts-ignore
                    i={(data.about)}
                >
                </Card>

            </div>

        </Layout>
    )

}
