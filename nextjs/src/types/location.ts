import {sortAsc, sortDesc} from "@/util/sort";

export type Location = {
    id: string;
    name: string;
    pronunciation: string;
    type: string;
    image: string;
    snippet: string;
    description: string[];
};

//FIXME: This is nearly identical to character.ts. Can we combine them or make them generalised? Maybe a parent type for search and order?
export const OrderByOptions: string[] = ["Name (A-Z)", "Name (Z-A)"]

export const GetLocationById = function (locations: Location[], id: string | null): Location | undefined {
    if (locations.length && id?.length) {
        return locations.find((el) => el.id == id);
    }
    return undefined;
}

export const FilterLocations = function (locations: Location[], searchTerm?: string, orderBy?: string): Location[] {
    let filteredLocations: Location[] = locations;

    if (searchTerm) {
        filteredLocations = filteredLocations.filter((location: Location) => {
            return location.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    }

    if (orderBy) {
        filteredLocations = orderLocations(filteredLocations, orderBy);
    }

    return filteredLocations
}

function orderLocations(locations: Location[], orderBy?: string): Location[] {
    let sortFn;

    switch (orderBy) {
        case OrderByOptions[0]:
            sortFn = function (a: Location, b: Location): number {
                return sortAsc(a.name, b.name)
            }
            break;
        case OrderByOptions[1]:
            sortFn = function (a: Location, b: Location): number {
                return sortDesc(a.name, b.name)
            }
            break;
        default:
            // If not specified, assume no sorting and just return immediately
            return locations
    }

    return locations.sort(sortFn)
}
