import Head from "next/head";
import Link from "next/link";
import React from "react";

type CardProps = {
    title: String;
    imgUrl:String;
    i: {};
    children:React.ReactNode
};

const types = new Map();
types.set("normal","slate-300")
types.set("fire","amber-500")
types.set("water","cyan-400")
types.set("grass","lime-600")
types.set("electric","yellow-400")
types.set("ice","teal-100")
types.set("fighting","rose-800")
types.set("poison","fuchsia-800")
types.set("ground","yellow-200")
types.set("flying","violet-300")
types.set("psychic","pink-400")
types.set("bug","lime-500")
types.set("ghost","violet-900")
types.set("rock","slate-900")
types.set("dragon","cyan-800")
types.set("steel","zinc-400")
types.set("fairy","rose-200")



const Card = (props:CardProps) =>{

    function colourCard(){
        let bc:String = "stone-800";
        // @ts-ignore
        let color:String = props.i.type;

        if(types.has(color)){
            bc = types.get(color)
            console.log(bc)

        }
        else{
            bc = "stone-800"
        }
        const tc:any = "rounded-xl shadow-lg overflow-hidden mx-10 w-40 bg-"+bc
        return tc;
    }


    return(

                <div className="py-10">
                    <div className={colourCard()}>

                        <img className="items-center px-10 "
                            // @ts-ignore
                             src={props.imgUrl}  alt="a pokemon"/>
                            <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{(props.title)}</h5>
                        <div className="flex">
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
                                <button type="button" className=" inline-block w-40 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

    )

}
export default Card;

