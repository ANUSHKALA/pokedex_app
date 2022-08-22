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
    const[req, setReq] = useState("");
    const[data, setData] = useState([]);
    searchName = ""
    type typeInfoMap ={
        name:String,
        img:String,
        count:number,
        in:{}
    }

    function handleChanges(e: React.FormEvent<HTMLInputElement>) {
        // @ts-ignore
        searchName = e.target.value
        console.log(searchName);
        // @ts-ignore
        setReq(e.target.value);

        refMap();

    }

    console.log("hgc "+searchName)
    console.log(req)

    async function refMap() {

        let mp:Array<String> = [];
        const info:[] = [];


        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        const jres = await res.json();

        jres.results.map((el: String, index: number) => {
            // @ts-ignore
            mp.push({name: el.name, index: index + 1})
        })
        // console.log(mp)


        mp.map(async (el:String, index) => {
            // @ts-ignore
            if(String(el.name).includes(req.toLowerCase())){
                const req = await fetch("https://pokeapi.co/api/v2/pokemon/"+el.index+"/")
                const jreq = await req.json()
                // @ts-ignore
                info.push(jreq);
                // console.log(info)
            }
        })

        setData(info);
        console.log(data)


    }

    console.log(searchName)

        return (
            <div className="place-items-center w-screen">
                <Layout title="PokeDex" handleChange={handleChanges}>
                    {req===""?
                        <div  className = "grid grid-cols-4 lg:gap-4">
                                {props.info.map(function (el:any,index:number){
                                    return(
                                        <Card key={index} title={el.name} imgUrl={el.img} i={el.in}>
                                            {el.name}
                                            <img src={el.img}/>
                                        </Card>
                                    )
                                })}
                            {console.log(req)}
                        </div>:
                        <div>
                            <div  className="px-3 flex  ">
                                {data.map(function (el:any,index:number){

                                    let infoArr: typeInfoMap = {img: "", name: "",count:0,in:{}}
                                    let abilityArr:[] = []
                                    let inArr:[] = [];
                                    // @ts-ignore
                                    el.abilities.map((el:String,index:number) => {
                                        // @ts-ignore
                                        abilityArr.push(el.ability.name);
                                    })

                                    // console.log(abilityArr)
                                    // @ts-ignore
                                    infoArr['name'] = el.name;
                                    // @ts-ignore
                                    infoArr['img'] = el.sprites.front_default;
                                    infoArr['in'] = {
                                        // @ts-ignore
                                        'weight':el.weight,
                                        // @ts-ignore
                                        'height':el.height,
                                        "abilities":abilityArr,
                                        // @ts-ignore
                                        'type':el.types[0].type.name,
                                    }

                                    console.log(abilityArr)

                                    // @ts-ignore
                                    inArr.push(infoArr)

                                    return(
                                        <Card key={index} title={infoArr.name} imgUrl={infoArr.img} i={infoArr.in}>
                                            {el.img}

                                            {console.log(typeof (el.in))}
                                            <img src={el.img}/>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </Layout>
            </div>

        )






}



export const getServerSideProps = (async () => {

        type typeInfoMap ={
            name:String,
            img:String,
            count:number,
            in:{}
        }

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20 0&offset=0');
    const results = await res.json() ;

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





