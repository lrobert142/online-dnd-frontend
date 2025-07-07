'use client'

import "./character-list.css"

import {ActionDispatch, useReducer} from "react";
import {useQueryState} from 'nuqs'
import Image from "next/image";
import {useDebouncedCallback} from 'use-debounce';

import {NPCs} from "@/res/npcs";
import {Character, FilterCharacters, GetCharacterById, OrderBy} from "@/types/character";
import {Property} from "csstype";
import Order = Property.Order;

type ActiveModalCharacterAction = {
    ID: string,
    Characters: Character[],
}

function activeModalCharacterReducer(_: Character | undefined, action: ActiveModalCharacterAction): Character | undefined {
    return GetCharacterById(action.Characters, action.ID)
}

enum FilterAction {
    Search = "Search",
    Order = "Order",
}

type CharactersAction = {
    Action: FilterAction;
    Search?: string;
    OrderBy?: OrderBy;
}

function charactersReducer(prevChars: Character[], action: CharactersAction): Character[] {
    console.log(action); //TODO TEMP
    if (action.Action == FilterAction.Search) {
        // On search, we need to look through ALL data
        return FilterCharacters(NPCs, action.Search, action.OrderBy)
    } else {
        // Otherwise, we can just order the current loading characters (setting search to `undefined` skips the processing)
        return FilterCharacters(prevChars, undefined, action.OrderBy)
    }
}

//TODO: Once I have this working, drag this function up a level into context.tsx(?) and split out each individual part to components (filters + display + modal)
// Make sure to pass in what is needed to make it work and re-test
export default function CharacterList() {
    const [id, setIdInUrl] = useQueryState('id');
    const [search, setSearchInUrl] = useQueryState('s');
    const [order, setOrderByInUrl] = useQueryState('order');
    // TODO: Apply filters on initial load
    const [characters, dispatchCharacters] = useReducer(charactersReducer, NPCs);
    const [activeModalCharacter, dispatchActiveModalCharacter] = useReducer(activeModalCharacterReducer, GetCharacterById(characters, id));

    //TODO: This should be moved into the modal component, not top-level here
    const closeModal = (): void => {
        setIdInUrl(null);
        dispatchActiveModalCharacter({ID: "", Characters: characters})
    }

    //TODO: This should be moved into the search component, not top-level here
    //TODO: Debounce from https://www.npmjs.com/package/use-debounce (credits page)
    const handleSearch = useDebouncedCallback((term) => {
        let orderBy: OrderBy | undefined = undefined;
        if (order && order in OrderBy) {
            orderBy = order as OrderBy;
        }

        dispatchCharacters({
            Action: FilterAction.Search,
            Search: term,
            OrderBy: orderBy,
        })
    }, 500)

    //TODO: This should be moved into the order-by component, not top-level here
    const orderByOptions = [];
    for (const k in OrderBy) {
        const v: string = OrderBy[k as keyof typeof OrderBy];
        orderByOptions.push(<option key={k} value={k}>{v}</option>);
    }

    return (
        <div>
            <div id="character-filters">
                <input
                    id="searchbar"
                    placeholder="Search"
                    value={search ? search : ""}
                    onChange={(e) => {
                        setSearchInUrl(e.target.value);
                        handleSearch(e.target.value);
                    }}/>
                <div className="order-by-container">
                    <span className="order-by-label">Order by:&nbsp;</span>
                    <select className="order-by-select" name="order-by" defaultValue={order ? order : undefined}
                            onChange={(e) => {
                                let orderBy: OrderBy | undefined = undefined;
                                if (order && order in OrderBy) {
                                    orderBy = order as OrderBy;
                                }

                                setOrderByInUrl(e.target.value);
                                dispatchCharacters({
                                    Action: FilterAction.Order,
                                    Search: search ? search : undefined,
                                    OrderBy: orderBy,
                                });
                            }}>
                        {orderByOptions}
                    </select>
                </div>
            </div>
            <CharactersDisplay
                characters={characters}
                dispatchActiveModalCharacter={dispatchActiveModalCharacter}
                setIdInUrl={setIdInUrl}
            />
            {activeModalCharacter &&
                <div id="character-modal" onClick={(e) => {
                    // @ts-expect-error `e.target.id` does exist, but is being incorrectly picked up as an error.
                    if (e.target.id == "character-modal" || e.target.id == "character-modal-centre") {
                        closeModal()
                    }
                }}>
                    <div id="character-modal-centre" className="centre">
                        <div className="content">
                            <span className="close"
                                  onClick={closeModal}></span>
                            <Image className="image" src={activeModalCharacter.image} alt={activeModalCharacter.name}
                                   width="200" height="300"/>
                            <h1 className="name">{activeModalCharacter.name}</h1>
                            <p className="gender-and-species">
                                <span className="gender">{activeModalCharacter.gender}</span>
                                &nbsp;
                                <span className="species">{activeModalCharacter.species}</span>
                            </p>
                            <h2 className="occupation-title">Occupation</h2>
                            <p className="occupation">{activeModalCharacter.occupation}</p>
                            <h2 className="location-title">Last seen</h2>
                            <p className="location">{activeModalCharacter.location}</p>
                            <h2 className="description-title">About</h2>
                            <p className="description">{activeModalCharacter.description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

type CharacterDisplayProps = {
    characters: Character[];
    dispatchActiveModalCharacter: ActionDispatch<[action: ActiveModalCharacterAction]>;
    setIdInUrl: (id: string) => void
}

function CharactersDisplay(props: CharacterDisplayProps) {
    return (
        <div id="characters-list">
            {props.characters.map((character) => (
                <span
                    onClick={(e) => {
                        e.preventDefault();
                        props.setIdInUrl(character.id)
                        props.dispatchActiveModalCharacter({
                            ID: character.id,
                            Characters: props.characters,
                        });
                    }}
                    key={character.id}
                    className="character-portrait"
                    style={{
                        backgroundImage: "url(" + character.image + ")",
                    }}>
                    <p className="name">{character.name}</p>
                </span>
            ))}
        </div>
    )
}