"use client";

import "./nav.css"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    const getActiveClass = function (toCheck: string): string {
        return pathname == toCheck ? "active" : ""
    }
    return (
        <ul id="main-nav">
            <li className={"nav-item " + getActiveClass("/")} key={"home"}>
                <Link href={"/"}>Home</Link>
            </li>
            <li className={"nav-item " + getActiveClass("/character-list/")} key={"characters"}>
                <Link href={"/character-list"}>Characters</Link>
            </li>
            <li className={"nav-item " + getActiveClass("/locations/")} key={"locations"}>
                <Link href={"/locations"}>Locations</Link>
            </li>
        </ul>
    )
}