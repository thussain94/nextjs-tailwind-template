import React from "react";
import Head from 'next/head'

import { SuccessButton } from "@components/Buttons/SuccessButton";

export default function Home() {
    return (
        <>
            <Head>
                <title>Starter Kit</title>
                <meta name="description" content="Starter Kit" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="h-screen grid grid-cols-4 relative">
                    <div className="bg-amber-300"></div>
                    <div className="bg-yellow-400"></div>
                    <div className="bg-orange-500"></div>
                    <div className="bg-red-600"></div>
                    <div className="absolute top-1/2 left-0 mx-auto text-center">
                        <p className="text-3xl px-10 py-4 text-gray-900 bg-blue-700 bg-opacity-50">Next.js Starter Kit with Tailwind</p>
                        <div className="mt-3">
                            <SuccessButton text={"Learn More!"}></SuccessButton>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
