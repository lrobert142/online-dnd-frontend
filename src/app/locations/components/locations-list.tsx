import "./locations-list.css"
import Image from "next/image";
import {resizedImageUrl} from "@/util/image";
import {Location} from "@/types/location";

type locationsListProps = {
    heading: string;
    locations: Location[];
    onClick: (location: Location) => void;
};

export default function LocationsList(props: locationsListProps) {
    return (
        <div className="locations-list">
            <h1 className="locations-list-heading">{props.heading}</h1>
            {props.locations.map((location: Location) => (
                <div key={location.id} className="location-list-item" onClick={() => props.onClick(location)}>
                    <Image
                        className="minimap"
                        src={resizedImageUrl(location.image, 100, 100)}
                        alt={location.name}
                        width="100"
                        height="100"
                    />
                    <h2 className="name">{location.name}</h2>
                    <p key={location.name + "-snippet"} className="snippet">{location.snippet}</p>
                    <div className="clear"></div>
                </div>
            ))}
        </div>
    )
}