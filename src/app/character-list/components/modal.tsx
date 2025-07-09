import "./modal.css"

import Image from "next/image";
import {Character} from "@/types/character";
import {resizedImageUrl} from "@/util/image";
import Link from "next/link";
import DeceasedOverlay from "@/components/deceased-overlay/deceased-overlay";

type characterDetailsModalProps = {
    closeModal: () => void;
    character?: Character;
}

export default function Modal(props: characterDetailsModalProps) {
    if (!props.character) {
        return null;
    }

    return (
        <div id="character-modal" className="no-doc-scroll" onClick={(e) => {
            // @ts-expect-error `e.target.id` does exist, but is being incorrectly picked up as an error.
            if (e.target.id == "character-modal" || e.target.id == "character-modal-centre") {
                props.closeModal()
            }
        }}>
            <div id="character-modal-centre" className="centre">
                <div className="content">
                            <span className="close"
                                  onClick={props.closeModal}></span>
                    <Link className="portrait" href={props.character.image} target="_blank" rel="noopener noreferrer">
                        <Image className="image"
                               src={resizedImageUrl(props.character.image, 200, 300)}
                               alt={props.character.name}
                               width="200" height="300"/>
                        {!props.character.isAlive && (<DeceasedOverlay width={200} height={300}/>)}
                    </Link>
                    <h1 className="name">{props.character.name}</h1>
                    <p className="gender-and-species">
                        <span className="gender">{props.character.gender}</span>
                        &nbsp;
                        <span className="species">{props.character.species}</span>
                    </p>
                    <h2 className="occupation-title">Occupation</h2>
                    <p className="occupation">{props.character.occupation}</p>
                    <h2 className="location-title">Last seen</h2>
                    <p className="location">{props.character.location}</p>
                    <h2 className="description-title">About</h2>
                    {props.character.description.map((desc) => (
                        <p key={desc} className="description">
                            {desc}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}