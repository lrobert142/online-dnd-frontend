import "./style.css"

import type {Metadata} from "next";
import CharacterList from "@/app/character-list/components/character-list";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: "Character List",
    description: "A list of characters encountered thus far",
};

export default async function Characters() {
    return (
        <Suspense fallback="Loading...">
            <CharacterList/>
        </Suspense>
    )
}
