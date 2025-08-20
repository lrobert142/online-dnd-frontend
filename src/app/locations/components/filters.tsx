import './filters.css'

import Searchbar from "@/components/searchbar/searchbar";
import OrderByFilter from "@/components/order-by-filter/order-by-filter";
import {OrderByOptions} from "@/types/location";

type filtersProps = {
    searchTerm?: string;
    defaultOrder?: string;
    onSearchChange: (searchTerm: string) => void;
    onOrderChange: (order: string) => void;
}

export default function Filters(props: filtersProps) {
    return (
        <div id="locations-filters">
            <Searchbar searchTerm={props.searchTerm} onSearchChange={props.onSearchChange}/>
            <div className="filters-container">
                <OrderByFilter options={OrderByOptions} defaultOrder={props.defaultOrder}
                               onOrderChange={props.onOrderChange}/>
            </div>
        </div>
    )
}