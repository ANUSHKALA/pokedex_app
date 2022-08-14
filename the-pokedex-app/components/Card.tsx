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
        <div className="w-full p-4 lg:w-80 text-center">
            <div className="block p-2 rounded-md shadow-lg bg-amber-50 max-w-sm my-3">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{(props.title)}</h5>
                <img className="text-gray-700 text-center mb-4"
                    // @ts-ignore
                     src={props.imgUrl}/>
                <Link href={{
                    pathname:'/info/PokePage',

                    query:{
                        // @ts-ignore
                        title:props.title,
                        // @ts-ignore
                        image:props.imgUrl,
                        // @ts-ignore
                        about:props.i.abilities,
                        // @ts-ignore
                        h:6,
                        // @ts-ignore
                        w:Number(props.i.weight),


                    }

                }}>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            View
                    </button>

                </Link>
                {/*{typeof ((props.i).height)}*/}
            </div>
        </div>
    )

}
export default Card;

