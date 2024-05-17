'use server'
import {Navbar, DarkThemeToggle, NavbarBrand} from "flowbite-react";
import Link from "next/link";

export default async function NavigationBar() {
    return (
        <>
            <Navbar fluid style={{background: 'black'}}>
                <NavbarBrand as={Link} href="https://refaldy.pages.dev">
                    <img src="/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo"/>
                    <span
                        className="self-center whitespace-nowrap text-xl font-semibold text-white">Earthquake</span>
                    <img src="/images/logo.svg" className="ml-3 mr-3 h-6 sm:h-9" alt="Logo"/>
                </NavbarBrand>
                <DarkThemeToggle />
            </Navbar>
        </>
    )
}