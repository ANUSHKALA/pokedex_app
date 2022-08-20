import Head from 'next/head';
import Link from "next/link";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";


export default function Page() {
    const router = useRouter();
    const data = router.query;

    let o:[] = [];


    for(let i in Object(data.about)){
        // @ts-ignore
        o = [...o,(Object(data.about))[i]]
    }


    // @ts-ignore
    // @ts-ignore
    return(
        <Layout
            // @ts-ignore
            title={data.title}>

            <div className="relative text-center">

                <img
                    // @ts-ignore
                    src={data.image}
                    width="200"
                    height="200"/>
                <h1 className="text-center text-3xl">

                    {//@ts-ignore
                        (data.title)
                    }
                </h1>
                <hr />

                <div>
                    Weight: { Number(data.w)}
                    <br />
                    Height: { Number(data.h)}
                    <br />
                    Type: {data.type}
                    <br />
                    Abilities:
                    <br />

                    {o.map((el:String,index:number) => {

                        return(
                            <div key={index}>
                                {el}
                                <br />
                            </div>
                        )
                    })}
                </div>
            </div>

        </Layout>
    )}