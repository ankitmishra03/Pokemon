import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemonName, setpokemonName] = useState("");
  const [pokemonChosen, setpokemonChosen] = useState(false);
  const [pokemon, setpokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });
  const searchPokemon = () => {
    // pokemonName = pokemonName.toLowerCase;
    console.log(pokemonName.toLowerCase());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        console.log(response);
        setpokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.other.dream_world.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setpokemonChosen(true);
      }
    );
  };
  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input
          type="text"
          onChange={(event) => {
            setpokemonName(event.target.value.toLowerCase());
          }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
        <div className="DisplaySection">
          {!pokemonChosen ? (
            <h1>Please choose a Pokemon</h1>
          ) : (
            <>
              <h1>{pokemon.name}</h1>
              <img src={pokemon.img} alt="pokemon" />
              <h3>Species : {pokemon.species}</h3>
              <h3>Type : {pokemon.type}</h3>
              <h4>Hp: {pokemon.hp}</h4>
              <h4>Attack: {pokemon.attack}</h4>
              <h4>Defence: {pokemon.defence}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
