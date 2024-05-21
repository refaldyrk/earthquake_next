'use client'
import NavigationBar from "@/app/_component/navbar";
import Hero from "@/app/_component/hero";
import {Card} from "flowbite-react";



export default function Home() {
    return (
    <>
            <div className="container dark:bg-gray-900 light:bg-gray-100">
                <div>
                    <NavigationBar />
                </div>
                <div>
                    <Hero />
                </div>
            </div>
    </>
    );
}
