import Head from "next/head";
import React from "react";

type LayoutProps = {
    title: String;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children:React.ReactNode
};

const Layout = (props:LayoutProps) =>{

    return(
        <div className="bg-gray-800 text-amber-100 w-screen h-1000py">
            <Head>
                <title>
                    {props.title}
                </title>
            </Head>
            <main >
                <h1 className="text-5xl mb-8 py-4 text-center">
                    Pokedex
                </h1>
                <div className="flex items-center justify-center text-gray-900">
                    <form className="form-floating place-items-center mp-3 xl:w-96">
                        <input onChange={props.handleChange} />
                    </form>
                </div>
                {props.children}
            </main>
        </div>
    )

}
export default Layout;

