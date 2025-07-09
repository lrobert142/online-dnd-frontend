import "./home.css";

import AnnotatedImage from "@/components/annotated-image/annotated-image";

export default function Home() {
    return (
        <div id="home">
            <h1 className="heading">The Adventure Begins</h1>
            <main className="hero-image-container">
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: "/pc/gaelin.png",
                        alt: "PC - Gaelin",
                        width: 400,
                        height: 600,
                    }}
                    description={"Galein"}
                />
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: "/pc/kaldoris.png",
                        alt: "PC - Kaldoris",
                        width: 400,
                        height: 600,
                    }}
                    description={"Kaldoris"}
                />
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: "/pc/petee.jpg",
                        alt: "PC - Petee",
                        width: 400,
                        height: 600,
                    }}
                    description={"Petee"}
                />
                <AnnotatedImage
                    className="hero-image"
                    imageProps={{
                        src: "/pc/sýnchysi.png",
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
