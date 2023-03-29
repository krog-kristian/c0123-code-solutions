export default function PokemonList({ pokedex }) {
  const listElements = pokedex.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return (
    <ul>{listElements}</ul>
  )
}
