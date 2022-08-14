import Head from 'next/head';
import Link from "next/link";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";


export default function Page() {
    const router = useRouter();
    const data = router.query;
    // @ts-ignore
    return(
        <Layout
            // @ts-ignore
            title={data.title}>

            <div className="text-center">

                <img
                    // @ts-ignore
                    src={data.image}
                    width="200"
                    height="200"/>
                <h2 className="text-center text-3xl">

                    {//@ts-ignore
                        (data.title)
                    }
                </h2>
                <hr />

                <p>
                    Weight:            { Number(data.w)}
                    <br />
                    Height:             { Number(data.h)}
                    <br />
                    Abilities:
                    <br />

                    {Object(data.about).map((el:String,index:number) => {

                        return(
                            <div>
                                {el}
                                <br />
                            </div>
                        )
                    })}
                </p>
            </div>

        </Layout>
    )

   }
