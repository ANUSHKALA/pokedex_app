import Head from "next/head";
import React from "react";

type LayoutProps = {
    title: String;
    children:React.ReactNode
};

const Layout = (props:LayoutProps) =>{

    return(
        <div className="bg-gray-800 text-amber-100">
            <Head>
                <title>
                    {props.title}
                </title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <main className={"container mx auto max-w-xl pt-8 min-h-screen"}>
                <h1 className="text-4xl mb-8 justify-center">
                    Pokedex
                </h1>
                {props.children}
            </main>
        </div>
    )

}
export default Layout;

