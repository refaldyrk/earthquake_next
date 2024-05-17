'use server'

import {
    Badge,
    Button,
    Card,
    Timeline, TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime, TimelineTitle
} from "flowbite-react";

interface Gempa {
    Tanggal: string;
    Jam: string;
    DateTime: string;
    Coordinates: string;
    Lintang: string;
    Bujur: string;
    Magnitude: string;
    Kedalaman: string;
    Wilayah: string;
    Potensi: string;
    Dirasakan: string;
    Shakemap: string;
}


async function getData(): Promise<Gempa> {
    let resp = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
    let data = await resp.json();
    return data.Infogempa.gempa as Gempa;
}

async function getallData(): Promise<Gempa[]> {
    let resp = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");
    let data = await resp.json();
    return data.Infogempa.gempa as Gempa[];
}
export default async function Hero() {
    const d = await getData();
    const all = await getallData();
    let element = all.map(el => {
        return (
            // eslint-disable-next-line react/jsx-key
            <TimelineItem key={el.Tanggal}>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>{el.Tanggal} - {el.Jam}</TimelineTime>
                    <TimelineTitle>{el.Wilayah}</TimelineTitle>
                    <TimelineBody>
                        <div className="flex flex-wrap">
                            <Badge color="green">{el.Potensi}</Badge>
                        </div>
                        <p>Koordinat: {el.Coordinates}</p>
                        <p>Lintang {el.Lintang}</p>
                        <p>Bujur {el.Bujur}</p>
                        <div className="flex flex-wrap">
                                <p className="mr-2">Magnitude</p>
                                <Badge color="red">{el.Magnitude}</Badge>
                        </div>
                        <div className="flex flex-wrap">
                            <p className="mr-2">Kedalaman</p>
                            <Badge color="blue">{el.Kedalaman}</Badge>
                        </div>
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        )
    })
    return (
        <>
            <Card>
            <div className="flex-1 md:p-20 w-full items-center justify-center">
                    <Card className="">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Info Gempa Terbaru
                        </h5>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
                            <div>
                                <img src={`https://data.bmkg.go.id/DataMKG/TEWS/${d.Shakemap}`} alt={"image"}
                                     className="sm:w-[400px] sm:h-[400px] w-full h-full"/>
                            </div>
                            <div className="grid grid-rows-[auto_1fr_auto]">
                                <div>
                                    <div className="grid grid-cols-2">
                                        <div>
                                    <span
                                        className="text-sm text-gray-500 dark:text-gray-400">{d.Tanggal} - {d.Jam}</span>
                                        </div>
                                        <div className="flex justify-end items-end">
                                    <span
                                        className="text-sm text-gray-500 dark:text-gray-400">Koordinat: {d.Coordinates}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="">
                                    <div className="grid grid-rows-2">
                                        <div className="flex mt-2">
                                    <span
                                        className="text-sm text-gray-500 dark:text-gray-400 mt-5">Lintang: {d.Lintang}</span>
                                        </div>
                                        <div className="flex mt-2">
                                    <span
                                        className="text-sm text-gray-500 dark:text-gray-400">Bujur: {d.Bujur}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-1 flex mt-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{d.Wilayah}<br/>{d.Dirasakan}
                                        </p>
                                    </div>
                                    <div className="grid grid-rows-1 flex mt-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Potensi: {d.Potensi}</p>
                                    </div>
                                    <div className="flex flex-wrap flex mt-5">
                                        <div className="flex items-center">
                                            <Badge
                                                color={"red"}
                                                className="dark:text-red-700 rounded-full p-1.5 text-center dark:bg-red-300 light:bg-red-100">{d.Magnitude}</Badge>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">Richter</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap flex mt-2">
                                        <div className="flex items-center">
                                            <Badge
                                                color={"blue"}
                                                className="dark:text-blue-700 rounded-full p-1.5 text-center dark:bg-blue-300 light:bg-blue-100">{d.Kedalaman.split(" ")[0]}</Badge>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">KM
                                                Kedalaman</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid grid-cols-2">
                                        <div>
                                    <span
                                        className="text-sm text-gray-500 dark:text-gray-400 italic">Source: BMKG Indonesia</span>
                                        </div>
                                        <div className="flex justify-end items-end">
                                            <Button color="blue"
                                                    className="light:bg-gray-100 light:text-black" target={"_blank"}
                                                    href={"https://data.bmkg.go.id/"}>Go
                                                To
                                                Source</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex-1 md:p-20 w-full items-center justify-center">
                    <Timeline>
                        {element}
                    </Timeline>
                </div>
            </Card>
        </>
    )
}