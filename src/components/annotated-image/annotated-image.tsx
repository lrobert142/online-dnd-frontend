import type {ImageProps} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type AnnotatedImageProps = {
    className?: string;
    imageProps: ImageProps;
    description: string;
}

export default function AnnotatedImage(props: AnnotatedImageProps) {
    return (
        <div className={props.className}>
            <Image className="image" {...props.imageProps} alt={props.description}/>
            <span className="description">{props.description}</span>
        </div>
    )
}