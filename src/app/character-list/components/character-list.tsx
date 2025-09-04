'use client'

import './character-list.css'

import {useReducer} from "react";
import {useQueryState} from 'nuqs'
import {useDebouncedCallback} from 'use-debounce';

import {NPCs} from "@/res/npcs";
import {Character, FilterCharacters, GetCharacterById, OrderByOptions} from "@/types/character";
import ModalContent from "@/app/character-list/components/modal-content";
import PortraitsView from "@/app/character-list/components/portraits-view";
import Filters from "@/components/filters/filters";
import Modal from "@/components/modal/modal";

function activeModalCharacterReducer(_?: Character, newChar?: Character): Character | undefined {
    return newChar
}

enum filterAction {
    Search = "Search",
    Order = "Order",
}

type charactersAction = {
    Action: filterAction;
    Search?: string;
    OrderBy?: string;
}

function charactersReducer(prevChars: Character[], action: charactersAction): Character[] {
    if (action.Action == filterAction.Search) {
        // On search, we need to look through ALL data
        return FilterCharacters(NPCs, action.Search, action.OrderBy)
    } else {
        // Otherwise, we can just order the current loading characters (setting search to `undefined` skips the processing)
        return FilterCharacters(prevChars, undefined, action.OrderBy)
    }
}

export default function CharacterList() {
    const idKey = "character-id";
    const searchKey = "character-search";
    const orderByKey = "character-order-by";

    const [id, setIdInUrl] = useQueryState(idKey);
    const [search] = useQueryState(searchKey);
    const [order] = useQueryState(orderByKey, {defaultValue: OrderByOptions[0]});

    const [characters, dispatchCharacters] = useReducer(charactersReducer, FilterCharacters(NPCs, search ? search : undefined, order));
    const [activeModalCharacter, dispatchActiveModalCharacter] = useReducer(activeModalCharacterReducer, GetCharacterById(characters, id));

    const closeModal = (): void => {
        setIdInUrl(null);
        dispatchActiveModalCharacter()
    }

    const handleSearch = useDebouncedCallback((term: string) => {
        dispatchCharacters({
            Action: filterAction.Search,
            Search: term,
            OrderBy: order,
        })
    }, 500)

    return (
        <div id="character-list">
            <Filters
                searchKey={searchKey}
                searchTerm={search ? search : undefined}
                onSearchChange={(searchTerm: string) => {
                    handleSearch(searchTerm);
                }}
                orderByKey={orderByKey}
                defaultOrderBy={order}
                orderByOptions={OrderByOptions}
                onOrderChange={(order: string) => {
                    dispatchCharacters({
                        Action: filterAction.Order,
                        Search: search ? search : undefined,
                        OrderBy: order,
                    });
                }}
            />
            <PortraitsView
                characters={characters}
                onPortraitClick={(character) => {
                    setIdInUrl(character.id)
                    dispatchActiveModalCharacter(character)
                }}
            />
            <Modal onClose={closeModal}
                   content={activeModalCharacter ? <ModalContent character={activeModalCharacter}/> : undefined}/>
        </div>
    )
}
