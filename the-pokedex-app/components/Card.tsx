import Head from "next/head";
import Link from "next/link";
import React from "react";

type CardProps = {
    title: String;
    imgUrl:String;
    i: {};
    children:React.ReactNode
};


const Card = (props:CardProps) =>{

    console.log(props.title);

    return(
        <div className="flex ">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div  className="px-6">
                    <img className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                        // @ts-ignore
                         src={props.imgUrl}/>
                    <div className="pt-6 text-center">
                        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">{(props.title)}</h1>
                        <div className="flex items-center justify-center">
                            <Link href={{
                                pathname:'/info/PokePage',

                                query:{
                                    // @ts-ignore
                                    title:props.title,
                                    // @ts-ignore
                                    image:props.imgUrl,
                                    // @ts-ignore
                                    about:Object(props.i.abilities),
                                    // @ts-ignore
                                    h:Number(props.i.height),
                                    // @ts-ignore
                                    w:Number(props.i.weight),
                                    // @ts-ignore
                                    type: props.i.type,
                                }
                            }}>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    View
                                </button>

                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Card;

