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
        <div className=" p-4 lg:w-2 flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div  className="block p-5 rounded-md shadow-lg bg-amber-50 max-w-[30%] min-w-fit my-3">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{(props.title)}</h5>
                    <img className="text-gray-700 mb-4"
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
    )

}
export default Card;

