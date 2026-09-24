import { useState, useEffect } from "react";
import { getPokemonImageById } from "./api/getPokemonImageById";
import Header from "./components/header";
import Game from "./components/game";

export default function App() {
    const allIds = [1, 4, 7, 10, 16, 19, 25, 77, 130, 133, 143, 150];
    const [ids, setIds] = useState([]);
    const [images, setImages] = useState([]);
    const [score, setScore] = useState(0);
    const [record, setRecord] = useState(localStorage.getItem("record") || 0);

    useEffect(() => {
        let cancelled = false;
        const loadImages = async () => {
            try {
                const urls = await Promise.all(allIds.map(id => getPokemonImageById(id)));
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
                <Header
                    score={score}
                    setScore={setScore}
                    setIds={setIds}
                    record={record}
                />
            </div>
            <div className="mt-16">
                <Game
                    images={images}
                    setImages={setImages}
                    score={score}
                    setScore={setScore}
                    ids={ids}
                    setIds={setIds}
                    record={record}
                    setRecord={setRecord}
                />
            </div>
        </>
    )
}
