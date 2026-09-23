import { useEffect, useState } from "react";

export default function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        async function getPokemonImage(id) {
            try {
                const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/25");

                if (!pokemon.ok)
                    throw new Error("Error HTTP: ", pokemon.status);

                const pokemonData = await pokemon.json();
                setImage(pokemonData.sprites.front_default);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        getPokemonImage(25);
    }, []);
 
    return (
        <>
            {image
             ? <img src={image} alt="Pikachu" />
             : <p>Loading ...</p>
            }
        </>
    )
}
