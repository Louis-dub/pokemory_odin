export async function getPokemonImageById(id) {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!pokemon.ok)
            throw new Error("Error HTTP: ", pokemon.status);

        const pokemonData = await pokemon.json();
        return pokemonData.sprites.front_default;
    } catch (error) {
        console.error("Error: ", error);
        return "";
    }
}
