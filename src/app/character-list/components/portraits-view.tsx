import "./portraits-view.css"

import {Character} from "@/types/character";
import {resizedImageUrl} from "@/util/image";

type characterDisplayProps = {
    characters: Character[];
    onPortraitClick: (character: Character) => void;
}

export default function PortraitsView(props: characterDisplayProps) {
    return (
        <div id="portraits-view">
            {props.characters.map((character) => (
                <span
                    onClick={() => props.onPortraitClick(character)}
                    key={character.id}
                    className="character-portrait"
                    style={{
                        backgroundImage: "url(" + resizedImageUrl(character.image, 200, 300) + ")",
                    }}>
                    <p className="name">{character.name}</p>
                </span>
            ))}
        </div>
    )
}