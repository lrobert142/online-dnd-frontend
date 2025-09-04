import "./page.css"

import type {Metadata} from "next";
import Main from "@/app/locations/components/main";

export const metadata: Metadata = {
    title: "Locations",
    description: "Places previously visited",
};

export default function Locations() {
    return (
        <Main/>
    )
}