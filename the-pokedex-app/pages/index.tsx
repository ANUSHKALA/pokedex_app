import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Card from '../components/Card'

import {scalarOptions} from "yaml";
import Link from "next/link";
import React from "react";
import {useState} from "react";
import {type} from "os";


const Home: NextPage = (props:any) => {

    const[searchName, setSearchName] = useState("");
    const[info, setInfo] = useState({img: "", name: "",count:0,in:{}})
    const[mp, setMap] = useState([])

    function handleChange(e: React.FormEvent<HTMLInputElement>){
        // @ts-ignore
        // console.log(e.target.name)
        // // @ts-ignore
        // console.log(e.target.value)
        // @ts-ignore
        setSearchName(e.target.value)
    }


    // async function handleClick(e: React.FormEvent<HTMLInputElement>) {
    //
    //     e.preventDefault()
    //
    //     console.log("thgrfd")
    //
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    //     const results = await response.json();
    //
    //     let arr:[] = [];
    //     let names:[] = [];
    //
    //     for (let i:number = 0;i<results.results.length;i++){
    //         let x:any = results.results[i];
    //         // @ts-ignore
    //         arr.push(x.url);
    //     }
    //     console.log(arr)
    //
    //     arr.map(async (element: any, index: number) => {
    //         const resp = await fetch(element);
    //         const jres = await resp.json();
    //         // @ts-ignore
    //         names.push(jres.name);
    //         console.log("kiuytgv")
    //         let abilityArr:[] = []
    //         jres.abilities.map((el:String,index:number) => {
    //             // @ts-ignore
    //             abilityArr.push(el);
    //             console.log(el)
    //         })
    //
    //         // console.log(jres.name);
    //         console.log(("llalalala"))
    //         for(let i in names){
    //             // @ts-ignore
    //             if(names[i] === searchName.toLowerCase()){
    //                 console.log("okokok")
    //                 setInfo({
    //                     name: jres.name,
    //                     count: jres.results.length,
    //                     img: jres.sprites.front_default,
    //                     in: {
    //                         'weight':jres.weight,
    //                         'height':jres.height,
    //                         "abilities":abilityArr
    //                     }
    //                 })
    //             }
    //             else{
    //                 console.log(("nonono nooooooooooooooooo"))
    //             }
    //         }
    //
    //     })
    //
    //
    //
    //     console.log(searchName);
    //
    // }

    async function refMap() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const jres = await res.json();
        console.log(jres)
        jres.map((el:String,index:number) => {
            // @ts-ignore
            setMap([...mp,{p:el.name,i:indx+1}])
        })
        console.log(mp)
    }



    // console.log(pokemon)
    return (

        <div className="">
            <Layout title="PokeDex" >

                <div>
                    <form>

                        <input onChange={handleChange} className="flex flex-col justify-center text-gray-900" name="pokename" type="text" id="pokename" placeholder="Enter pokemon name"/>

                        <Link
                            onClick={refMap}
                            href={{
                            pathname:'/info/SearchPage',

                            query:{
                                // @ts-ignore
                                title: info.name,
                                // @ts-ignore
                                image:info.img,
                                // @ts-ignore
                                about:info.in
                            }

                        }}>
                            <button
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                name="goButton"
                                className="inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                // @ts-ignore
                            >Go</button>

                        </Link>

                    </form>
                </div>

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
                {/*{console.log(typeof props.info)}*/}

            </Layout>

        </div>

    )
}



export const getServerSideProps = (async () => {


    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2&offset=0');
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
            // console.log(el.ability.name)
        })

        console.log(abilityArr)

        infoArr['name'] = rj.name;
        infoArr['img'] = rj.sprites.front_default;
        infoArr['count'] = results.results.length;
        infoArr['in'] = {
            'weight':rj.weight,
            'height':rj.height,
            "abilities":abilityArr
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





