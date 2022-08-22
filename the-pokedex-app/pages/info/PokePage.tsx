import Head from 'next/head';
import Link from "next/link";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import Image from "next/image";


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

            <div className="grid h-screen place-items-center">


                <div className="relative bottom-40 left-50">
                    <div>
                            <img
                                // @ts-ignore
                                src={data.image}
                                // width="200px"
                                // height="200px"
                                className=" shadow-lg max-w-fit h-60 align-middle border-none undefined bg-gray-800 grid h-50 w-50px place-items-center"
                              />
                            {/*<Image src={data.image} layout='fill'/>*/}
                        <h1 className="text-center text-3xl">

                            {//@ts-ignore
                                (data.title)
                            }
                        </h1>
                        <hr />
                    </div>
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