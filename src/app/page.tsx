import "./home.css";

import AnnotatedImage from "@/components/annotated-image/annotated-image";
import {resizedImageUrl} from "@/util/image";

export default function Home() {
    return (
        <div id="home">
            <h1 className="heading">The Adventure Begins</h1>
            <main className="hero-image-container">
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: resizedImageUrl("/pc/gaelin.png", 400, 600),
                        alt: "PC - Gaelin",
                        width: 400,
                        height: 600,
                    }}
                    description={"Galein"}
                />
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: resizedImageUrl("/pc/kaldoris.png", 400, 600),
                        alt: "PC - Kaldoris",
                        width: 400,
                        height: 600,
                    }}
                    description={"Kaldoris"}
                />
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: resizedImageUrl("/pc/petee.jpg", 400, 600),
                        alt: "PC - Petee",
                        width: 400,
                        height: 600,
                    }}
                    description={"Petee"}
                />
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: resizedImageUrl("/pc/sýnchysi.png", 400, 600),
                        alt: "PC - Sýnchysi",
                        width: 400,
                        height: 600,
                    }}
                    description={"Sýnchysi"}
                />
            </main>
        </div>
    );
}
