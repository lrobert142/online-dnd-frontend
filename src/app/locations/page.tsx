import "./page.css"

import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Locations",
    description: "Places previously visited",
};

export default function Locations() {
    return (
        <div id="locations">
            <p>
                This page is still under development. But in the future, you will be able to see:
            </p>
            <ul>
                <li>A world map</li>
                <li>Maps of previously visited towns and locations</li>
                <li>Interactive markers for NPCs, shops, and more</li>
            </ul>
            <p>
                But this can be very complicated and very taxing to do right, so you will need to wait just a little bit
                longer ;)
            </p>
        </div>
    )
}