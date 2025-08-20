'use client'

import "./searchbar.css"
import {useQueryState} from "nuqs";

type searchbarProps = {
    searchTerm?: string;
    onSearchChange: (searchTerm: string) => void;
}

export default function Searchbar(props: searchbarProps) {
    const [search, setSearchInUrl] = useQueryState('s', {defaultValue: (props.searchTerm ? props.searchTerm : "")});

    return (
        <input
            id="searchbar"
            placeholder="Search"
            value={search}
            onChange={(e) => {
                setSearchInUrl(e.target.value);
                props.onSearchChange(e.target.value)
            }}/>
    )
}