import { useState, useEffect } from "react";
import { getPokemonImageById } from "./api/getPokemonImageById";
import Header from "./components/header";

export default function App() {
    const ids = [1, 4, 7, 10, 16, 19, 25, 77, 130, 133, 143, 150];
    const [images, setImages] = useState([]);

    useEffect(() => {
        let cancelled = false;
        const loadImages = async () => {
            try {
                const urls = await Promise.all(ids.map(id => getPokemonImageById(id)));
                if (!cancelled) {
                    const imgs = urls.map((url, id) =>({
                        id: id,
                        url: url 
                    }));
                    setImages(imgs);
                }
            } catch (error) {
                console.error("Error: ", error);
                if (!cancelled) {
                    setImages([]); 
                }
            }
        };
        loadImages();

        return () => { cancelled = true; };
    }, []);
 
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div className="w-[600px] flex flex-wrap border rounded-[5px] justify-center">
                    {images.map(image => (
                        <img key={image.id} src={image.url} alt="Pokemon" />
                    ))}
                </div>
            </div>
        </>
    )
}
