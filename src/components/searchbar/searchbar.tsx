'use client'

import "./searchbar.css"
import {useQueryState} from "nuqs";

type searchbarProps = {
    searchKey: string;
    searchTerm?: string;
    searchDefault?: string;
    onSearchChange: (searchTerm: string) => void;
}

export default function Searchbar(props: searchbarProps) {
    const [search, setSearchInUrl] = useQueryState(props.searchKey, {
        defaultValue: (props.searchTerm ?
                props.searchTerm :
                (props.searchDefault ? props.searchDefault : "")
        )
    });

    return (
        <input
            className="searchbar"
            placeholder="Search"
            value={search}
            onChange={(e) => {
                setSearchInUrl(e.target.value);
                props.onSearchChange(e.target.value)
            }}/>
    )
}