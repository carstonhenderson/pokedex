import React from 'react'
import PokemonRow from './pokemonRow'

const PokemonTable = ({ pokemon, filter, page }) => (
  <div className="border-t border-gray-700 -mx-4 mb-4">
    {pokemon.map(pokemon => (
      <PokemonRow pokemon={pokemon} savedFilter={filter} savedPage={page} />
    ))}
  </div>
)

export default PokemonTable
