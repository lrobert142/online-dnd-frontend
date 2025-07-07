import {sortAsc, sortDesc} from "@/util/sort";

export type Character = {
    id: string;
    name: string;
    image: string;
    species: string;
    gender: string;
    occupation: string;
    description: string[];
    location: string;
};

export enum OrderBy {
    NameASC = "Name (A-Z)",
    NameDESC = "Name (Z-A)",
}

export const GetCharacterById = function (characters: Character[], id: string | null): Character | undefined {
    if (characters.length && id?.length) {
        return characters.find((el) => el.id == id);
    }
    return undefined;
}

export const FilterCharacters = function (characters: Character[], searchTerm?: string, orderBy?: OrderBy): Character[] {
    let filteredCharacters: Character[] = characters;

    if (searchTerm) {
        filteredCharacters = filteredCharacters.filter((character: Character) => {
            return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    }

    if (orderBy) {
        filteredCharacters = orderCharacters(filteredCharacters, orderBy);
    }

    return filteredCharacters
}

function orderCharacters(characters: Character[], orderBy?: OrderBy): Character[] {
    let sortFn;

    switch (orderBy) {
        case OrderBy.NameASC:
            sortFn = function (a: Character, b: Character): number {
                return sortAsc(a.name, b.name)
            }
            break;
        case OrderBy.NameDESC:
            sortFn = function (a: Character, b: Character): number {
                return sortDesc(a.name, b.name)
            }
            break;
        default:
            // If not specified, assume no sorting and just return immediately
            return characters
    }

    return characters.sort(sortFn)
}
