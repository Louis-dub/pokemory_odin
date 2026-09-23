import { useState, useEffect } from "react";
import { getPokemonImageById } from "./api/getPokemonImageById";

export default function App() {
    const ids = [1, 4, 7, 10, 16, 19, 25, 77, 130, 133, 143, 150];
    const [images, setImages] = useState([]);

    useEffect(() => {
        let cancelled = false;

        Promise.all(ids.map(id => getPokemonImageById(id)))
            .then(urls => {
                if (!cancelled) setImages(urls);
            });

        return () => { cancelled = true; };
    }, []);
 
    return (
        <>
            {images.map((image, index) => (
                <img key={ids[index]} src={image} alt="Pokemon" />
            ))}
        </>
    )
}
