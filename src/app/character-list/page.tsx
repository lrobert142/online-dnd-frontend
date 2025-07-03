import "./style.css"

import type {Metadata} from "next";
import CharacterList from "@/app/character-list/components/character-list";

export const metadata: Metadata = {
    title: "Character List",
    description: "A list of characters encountered thus far",
};

//TODO: Begin with Portrait view (static inline data for examples)
// Then make the modal
// Then make the detailed view
// Then make the view toggle
// Then, swap out static data to data from JSON files (local files)
// Then see if I can automate it to read from a dir
// Then add filters, search, and ordering (naive approach first to load all data, maybe in parallel later)
export default async function Characters() {
    return (
        <CharacterList />
    )
}
