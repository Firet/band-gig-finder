import Image from "next/image";
import './hero-section.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <h1>Buscá cuando toca tu banda favorita</h1>
            <Image
                src="./yellow-concert.jpg"
                alt="Recital con luces amarillas"
                className="hero-image"
                fill
                unoptimized
            />

        </section>
    )
}