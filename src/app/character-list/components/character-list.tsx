'use client'

import "./character-list.css"

import {ActionDispatch, useReducer} from "react";
import {useQueryState} from 'nuqs'

import {NPCs} from "@/res/npcs";
import {Character, GetCharacterById} from "@/types/character";
import Image from "next/image";

type ActiveModalCharacterAction = {
    ID: string,
    Characters: Character[],
}

function activeModalCharacterReducer(_: Character | undefined, action: ActiveModalCharacterAction): Character | undefined {
    return GetCharacterById(action.Characters, action.ID)
}

type CharactersAction = {
    //TODO: This will eventually include things like filters, search, etc.
    Filters: any;
}

function charactersReducer(characters: Character[], action: CharactersAction): Character[] {
    console.log("action", action); //TODO TEMP
    return characters
}

//TODO: Once I have this working, drag this function up a level into context.tsx(?) and split out each individual part to components (filters + display + modal)
// Make sure to pass in what is needed to make it work and re-test
export default function CharacterList() {
    const [id, setIdInUrl] = useQueryState('id')
    const [characters, dispatchCharacters] = useReducer(charactersReducer, NPCs);
    const [activeModalCharacter, dispatchActiveModalCharacter] = useReducer(activeModalCharacterReducer, GetCharacterById(characters, id));

    return (
        <div>
            <div>
                {/*TODO: dispatchCharacters to apply filters and such. Should also automatically recalculate the display */}
                Filtering, searching, and ordering coming soon!
            </div>
            <CharactersDisplay
                characters={characters}
                dispatchActiveModalCharacter={dispatchActiveModalCharacter}
                setIdInUrl={setIdInUrl}
            />
            {activeModalCharacter &&
                <div id="character-modal">
                    <div className="centre">
                        <div className="content">
                            <span className="close"
                                  onClick={() => dispatchActiveModalCharacter({ID: "", Characters: characters})}></span>
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