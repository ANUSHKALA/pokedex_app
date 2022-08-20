import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Card from '../components/Card'

import {scalarOptions} from "yaml";
import Link from "next/link";
import React from "react";
import {useState} from "react";
import {type} from "os";


const Home: NextPage = (props:any) => {

    let searchName:String = ""
    const[info, setInfo] = useState({});
    const[reqIndex, setReqIndex] = useState(0);
    const[data, setData] = useState({});
    let mp:Array<String> = [];

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        // @ts-ignore
        searchName = e.target.value
        console.log(searchName);

        refMap();

    }


    async function refMap() {

        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');
        const jres = await res.json();

        jres.results.map((el: String, index: number) => {
            // @ts-ignore
            mp.push({name: el.name, index: index + 1})

        })

        mp.map(async (el, index) => {
            // @ts-ignore
            if (el.name === searchName) {
                console.log("yasss")
                // console.log(el.name)
                console.log(searchName)

                const r = await fetch("https://pokeapi.co/api/v2/pokemon/" + index + 1 + "/");
                setInfo(await r.json());

                console.log("info")
                console.log(info)

            } else {
                console.log("no no no");
                // console.log(el.name)
                console.log(searchName)

            }
        })

    }

    // function sendingData(){
    //
    //
    //
    // }



    // console.log(pokemon)

    if(searchName === ""){

        return (

            <div className="">
                <Layout title="PokeDex" >
                    {/*<div>*/}
                    {/*    <form>*/}
                    {/*        <input onChange={handleChange} className="flex flex-col justify-center text-gray-900" name="pokename" type="text" id="pokename" placeholder="Enter pokemon name"/>*/}
                    {/*        /!*<Link*!/*/}
                    {/*        /!*    href={{*!/*/}
                    {/*        /!*        pathname:'/info/SearchPage',*!/*/}
                    {/*        /!*        query:{*!/*/}
                    {/*        /!*            // @ts-ignore*!/*/}
                    {/*        /!*            title: info.name,*!/*/}
                    {/*        /!*            // @ts-ignore*!/*/}
                    {/*        /!*            image:info.img,*!/*/}
                    {/*        /!*            // @ts-ignore*!/*/}
                    {/*        /!*            about:info.in*!/*/}
                    {/*        /!*        }*!/*/}

                    {/*        /!*    }}>*!/*/}
                    {/*            <button*/}
                    {/*                // @ts-ignore*/}
                    {/*                // onClick={refMap}*/}
                    {/*                type="button"*/}
                    {/*                data-mdb-ripple="true"*/}
                    {/*                data-mdb-ripple-color="light"*/}
                    {/*                name="goButton"*/}
                    {/*                className="inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"*/}
                    {/*            >Go</button>*/}
                    {/*        /!*</Link>*!/*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    {props.info.map(function (el:any,index:number){
                        return(
                            <div key={index} className = "grid lg:grid-cols-4">
                                <Card key={index} title={el.name} imgUrl={el.img} i={el.in}>
                                    {el.name}
                                    <img src={el.img}/>
                                </Card>
                            </div>
                        )
                    })}
                </Layout>
            </div>

        )

    }

    return(
        <Layout
            // @ts-ignore
            title={info.name}>
            <div>

                <Card
                    // @ts-ignore
                    title={info.name}
                    // @ts-ignore
                    imgUrl={info.sprites.front_default}
                    // @ts-ignore
                    i={(data.about)}
                >
                </Card>

            </div>

        </Layout>
    )


}



export const getServerSideProps = (async () => {


    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0');
    const results = await res.json() ;
    type typeInfoMap ={
        name:String,
        img:String,
        count:number,
        in:{}
    }
    let arr:[] = [];
    let info:[] = [];

    for (let i:number = 0;i<results.results.length;i++){
        let x:any = results.results[i]
        // @ts-ignore
        arr.push(x.url);
    }


    for(let j in arr){
        const resp = await fetch(arr[j]);
        const rj = await resp.json();
        let infoArr: typeInfoMap = {img: "", name: "",count:0,in:{}}
        let abilityArr:[] = []
        rj.abilities.map((el:String,index:number) => {
            // @ts-ignore
            abilityArr.push(el.ability.name);
        })

        // console.log(abilityArr)

        infoArr['name'] = rj.name;
        infoArr['img'] = rj.sprites.front_default;
        infoArr['count'] = results.results.length;
        infoArr['in'] = {
            'weight':rj.weight,
            'height':rj.height,
            "abilities":abilityArr,
            'type':rj.types[0].type.name,
        }

        // console.log(typeof (infoArr['in']))

        // @ts-ignore
        info.push (infoArr)

    }

    return{
        props: {info}
    }}
)




export default  Home;





