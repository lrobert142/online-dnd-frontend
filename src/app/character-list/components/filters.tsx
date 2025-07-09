import "./filters.css"

import {OrderBy} from "@/types/character";

type filtersProps = {
    searchTerm?: string;
    defaultOrder?: string;
    onSearchChange: (searchTerm: string) => void;
    onOrderChange: (order: OrderBy) => void;
}

export default function Filters(props: filtersProps) {
    const orderByOptions = [];
    for (const k in OrderBy) {
        const v: string = OrderBy[k as keyof typeof OrderBy];
        orderByOptions.push(<option key={k} value={v}>{v}</option>);
    }

    return (
        <div id="character-filters">
            <input
                id="searchbar"
                placeholder="Search"
                value={props.searchTerm ? props.searchTerm : ""}
                onChange={(e) => props.onSearchChange(e.target.value)}/>
            <div className="order-by-container">
                <span className="order-by-label">Order by:&nbsp;</span>
                <select className="order-by-select" name="order-by"
                        defaultValue={props.defaultOrder ? props.defaultOrder : undefined}
                    // @ts-expect-error: e.target.value will always be a valid value as it is generated from OrderBy
                    // options above
                        onChange={(e) => props.onOrderChange(e.target.value)}>
                    {orderByOptions}
                </select>
            </div>
        </div>
    )
}