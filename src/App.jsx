export default function App() {
    async function getPokemonImage(id) {
        try {
            const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/25");

            if (!pokemon.ok)
                throw new Error("Error HTTP: ", pokemon.status);

            const pokemonData = await pokemon.json();
            const imageUrl = pokemonData.sprites.font_default;

            if (imageUrl)
                return imageUrl;
        } catch (error) {
            console.error("Error: ", error);
        }
    }
 
    return (
        <>
        </>
    )
}
