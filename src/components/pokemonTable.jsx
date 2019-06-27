import React from 'react'
import PokemonRow from './pokemonRow'

const PokemonTable = ({ filter, pokemon }) => {
  const filteredPokemon = pokemon.filter(pokemon => {
    const nameMatches = pokemon.name
      .toLowerCase()
      .includes(filter.toLowerCase())

    const typeMatches =
      pokemon.type.filter(type => {
        return type.toLowerCase().includes(filter.toLowerCase())
      }).length > 0

    return nameMatches || typeMatches
  })

  return (
    <div>
      {filteredPokemon.map(pokemon => (
        <PokemonRow pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonTable
