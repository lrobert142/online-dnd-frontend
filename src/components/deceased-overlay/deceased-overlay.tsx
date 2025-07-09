import "./deceased-overlay.css"

import {resizedImageUrl} from "@/util/image";
import Image from "next/image";

export type OverlayProps = {
    width: number,
    height: number,
}

export default function DeceasedOverlay(props: OverlayProps) {
    return (
        <Image className="deceased-overlay"
               src={resizedImageUrl('/general/skull.png', props.width, props.height)}
               alt="character is deceased"
               width={props.width}
               height={props.height}
        />
    )
}