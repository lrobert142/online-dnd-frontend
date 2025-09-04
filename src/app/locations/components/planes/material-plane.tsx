import "./planes.css"

import {useQueryState} from "nuqs";
import {FilterLocations, GetLocationById, Location, OrderByOptions} from "@/types/location";
import WorldMap from "@/app/locations/components/world-map";
import Filters from "@/components/filters/filters";
import LocationsList from "@/app/locations/components/locations-list";
import {Continents, Countries, PlacesOfInterest, Towns} from "@/res/material-plane";
import {useEffect, useReducer} from "react";
import Modal from "@/components/modal/modal";
import {useDebouncedCallback} from "use-debounce";
import ModalContent from "@/app/locations/components/planes/modal-content";

type MaterialPlaneProps = {
    display: boolean;
};

function activeModalLocationReducer(_?: Location, newLocation?: Location): Location | undefined {
    return newLocation
}

enum filterAction {
    Search = "Search",
    Order = "Order",
}

type locationsAction = {
    Action: filterAction;
    Search?: string;
    OrderBy?: string;
}

function continentsReducer(prevLocations: Location[], action: locationsAction): Location[] {
    if (action.Action == filterAction.Search) {
        // On search, we need to look through ALL data
        return FilterLocations(Continents, action.Search, action.OrderBy)
    } else {
        // Otherwise, we can just order the current locations (setting search to `undefined` skips the processing)
        return FilterLocations(prevLocations, undefined, action.OrderBy)
    }
}

function countriesReducer(prevLocations: Location[], action: locationsAction): Location[] {
    if (action.Action == filterAction.Search) {
        // On search, we need to look through ALL data
        return FilterLocations(Countries, action.Search, action.OrderBy)
    } else {
        // Otherwise, we can just order the current locations (setting search to `undefined` skips the processing)
        return FilterLocations(prevLocations, undefined, action.OrderBy)
    }
}

function townsReducer(prevLocations: Location[], action: locationsAction): Location[] {
    if (action.Action == filterAction.Search) {
        // On search, we need to look through ALL data
        return FilterLocations(Towns, action.Search, action.OrderBy)
    } else {
        // Otherwise, we can just order the current locations (setting search to `undefined` skips the processing)
        return FilterLocations(prevLocations, undefined, action.OrderBy)
    }
}

function placesOfInterestReducer(prevLocations: Location[], action: locationsAction): Location[] {
    if (action.Action == filterAction.Search) {
        // On search, we need to look through ALL data
        return FilterLocations(PlacesOfInterest, action.Search, action.OrderBy)
    } else {
        // Otherwise, we can just order the current locations (setting search to `undefined` skips the processing)
        return FilterLocations(prevLocations, undefined, action.OrderBy)
    }
}

// FIXME: The modal should probably be hoisted up a level. But let's get it working for just this first.
// FIXME: This is going to be a lot of duplication to get things working, then I will need to work out how to make the
//  different types all work with the various dispatches and such. Maybe I can do something in parallel?
export default function MaterialPlane(props: MaterialPlaneProps) {
    const idKey = "location-id";
    const searchKey = "material-plane-search";
    const orderKey = "material-plane-order";

    const [id, setIdInUrl] = useQueryState(idKey);
    const [search] = useQueryState(searchKey);
    const [order] = useQueryState(orderKey, {defaultValue: OrderByOptions[0]});

    // FIXME: Need to filter all things, not just Continents
    const [continents, dispatchContinents] = useReducer(continentsReducer, FilterLocations(Continents, search ? search : undefined, order));
    // const [countries, dispatchCountries] = useReducer(countriesReducer, FilterLocations(Countries, search ? search : undefined, order));
    // const [towns, dispatchTowns] = useReducer(townsReducer, FilterLocations(Towns, search ? search : undefined, order));
    // const [placesOfInterest, dispatchPlacesOfInterest] = useReducer(placesOfInterestReducer, FilterLocations(PlacesOfInterest, search ? search : undefined, order));

    //FIXME: This will need to combine all locations and update whenever they change
    const [activeModalLocation, dispatchActiveModalLocation] = useReducer(activeModalLocationReducer,
        // GetLocationById(continents.concat(countries, towns, placesOfInterest), id));
        GetLocationById(continents, id));

    const closeModal = (): void => {
        setIdInUrl(null);
        dispatchActiveModalLocation()
    }

    //FIXME: There seems to be an error with the debounce when I type to quickly. This is cooked...
    const handleSearch = useDebouncedCallback((term: string) => {
        console.log("handleSearch"); //TODO TEMP
        // dispatchContinents({
        //     Action: filterAction.Search,
        //     Search: term,
        //     OrderBy: order,
        // })
        // dispatchCountries({
        //     Action: filterAction.Search,
        //     Search: term,
        //     OrderBy: order,
        // })
        // dispatchTowns({
        //     Action: filterAction.Search,
        //     Search: term,
        //     OrderBy: order,
        // })
        // dispatchPlacesOfInterest({
        //     Action: filterAction.Search,
        //     Search: term,
        //     OrderBy: order,
        // })
    }, 500)


    const handleLocationClick = (location: Location) => {
        setIdInUrl(location.id)
        dispatchActiveModalLocation(location)
    }

    return (
        <div className={"plane-container" + (props.display ? " active" : "")}>
            {/* FIXME: Every single action is causing this to re-render. WTF is happening?! */}
            <WorldMap/>
            {/* FIXME: Add a section here about the world */}
            <Filters
                searchKey={searchKey} searchTerm={search ? search : undefined} onSearchChange={handleSearch}
                orderByKey={orderKey} defaultOrderBy={order} orderByOptions={OrderByOptions}
                onOrderChange={(order: string) => {
                    // dispatchContinents({
                    //     Action: filterAction.Order,
                    //     Search: search ? search : undefined,
                    //     OrderBy: order,
                    // });
                    // dispatchCountries({
                    //     Action: filterAction.Order,
                    //     Search: search ? search : undefined,
                    //     OrderBy: order,
                    // });
                    // dispatchTowns({
                    //     Action: filterAction.Order,
                    //     Search: search ? search : undefined,
                    //     OrderBy: order,
                    // });
                    // dispatchPlacesOfInterest({
                    //     Action: filterAction.Order,
                    //     Search: search ? search : undefined,
                    //     OrderBy: order,
                    // });
                }}
            />
            <LocationsList heading="Continents" locations={continents} onClick={handleLocationClick}/>
            {/*<LocationsList heading="Countries" locations={countries} onClick={handleLocationClick}/>*/}
            {/*<LocationsList heading="Towns" locations={towns} onClick={handleLocationClick}/>*/}
            {/*<LocationsList heading="Places of Interest" locations={placesOfInterest} onClick={handleLocationClick}/>*/}
            <Modal onClose={closeModal}
                   content={activeModalLocation ? <ModalContent location={activeModalLocation}/> : undefined}/>
        </div>
    )
}
