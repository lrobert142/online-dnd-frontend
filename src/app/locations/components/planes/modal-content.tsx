import "./modal-content.css"

import {Location} from "@/types/location";

type locationDetailsModalProps = {
    location?: Location;
}

export default function ModalContent(props: locationDetailsModalProps) {
    if (!props.location) {
        return null;
    }

    console.log("location", props.location); //TODO TEMP

    return (
        <div>
            <p>FIXME: Modal content is coming soon, so watch this space!</p>
        </div>
    )
}