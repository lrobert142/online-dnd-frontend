'use client'

import './main.css'

import {useQueryState} from "nuqs";
import {Location, OrderByOptions} from "@/types/location";

import Filters from "@/app/locations/components/filters";
import WorldMap from "@/app/locations/components/world-map";
import LocationsList from "@/app/locations/components/locations-list";
import {Continents, Countries, PlacesOfInterest, Towns} from "@/res/locations";

export default function Main() {
    const [search] = useQueryState('s');
    const [order] = useQueryState('order', {defaultValue: OrderByOptions[0]});

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
        <div id="locations">
            <WorldMap/>
            <Filters searchTerm={search ? search : undefined} defaultOrder={order} onSearchChange={handleSearch}
                     onOrderChange={handleOrderBy}/>
            <LocationsList heading="Continents" locations={Continents} onClick={handleLocationClick}/>
            <LocationsList heading="Countries" locations={Countries} onClick={handleLocationClick}/>
            <LocationsList heading="Towns" locations={Towns} onClick={handleLocationClick}/>
            <LocationsList heading="Places of Interest" locations={PlacesOfInterest} onClick={handleLocationClick}/>
        </div>
    )
}