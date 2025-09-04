import "./planes.css"

import {useQueryState} from "nuqs";
import {Location, OrderByOptions} from "@/types/location";
import Filters from "@/components/filters/filters";
import LocationsList from "@/app/locations/components/locations-list";

import {Feywilds as FeywildsData} from "@/res/feywilds";

type FeywildsProps = {
    display: boolean;
};

export default function Feywilds(props: FeywildsProps) {
    const searchKey = "feywilds-search";
    const orderKey = "feywilds-order";
    const [search] = useQueryState(searchKey);
    const [order] = useQueryState(orderKey, {defaultValue: OrderByOptions[0]});

    const handleSearch = (searchTerm: string) => {
        //FIXME: Apply search to ALL locations (continents, countries, towns, poi, etc.)
        console.log(searchTerm); //TODO TEMP
    }

    const handleOrderBy = (order: string) => {
        //FIXME: Apply ordering to ALL locations (continents, countries, towns, poi, etc.)
        console.log(order); //TODO TEMP
    }

    const handleLocationClick = (location: Location) => {
        //FIXME: Bring up modal via args (actual content will be dynamic)
        console.log(location); //TODO TEMP
    }

    return (
        <div className={"plane-container" + (props.display ? " active" : "")}>
            {/* FIXME: Talk about how there cannot be a map of the Feywilds and why. */}
            <Filters
                searchKey={searchKey} searchTerm={search ? search : undefined} onSearchChange={handleSearch}
                orderByKey={orderKey} defaultOrderBy={order} orderByOptions={OrderByOptions}
                onOrderChange={handleOrderBy}/>
            <LocationsList heading="TODO" locations={FeywildsData} onClick={handleLocationClick}/>
        </div>
    )
}
