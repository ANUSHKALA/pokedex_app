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
            </Head>
            <main >
                <h1 className="text-5xl mb-8 py-4 text-center">
                    Pokedex
                </h1>
                {props.children}
            </main>
        </div>
    )

}
export default Layout;

