import "./portraits-view.css"

import {Character} from "@/types/character";
import {resizedImageUrl} from "@/util/image";
import Image from "next/image";

type characterDisplayProps = {
    characters: Character[];
    onPortraitClick: (character: Character) => void;
}

export default function PortraitsView(props: characterDisplayProps) {
    return (
        <div id="portraits-view">
            {props.characters.map((character) => (
                <div key={character.id} className="character-portrait" onClick={() => props.onPortraitClick(character)}>
                    <Image
                        src={resizedImageUrl(character.image, 200, 300)}
                        alt={character.name}
                        width="200"
                        height="300"
                    />
                    {!character.isAlive && (<span className="deceased-overlay"></span>)}
                    <p className="name">{character.name}</p>
                </div>
            ))}
        </div>
    )
}