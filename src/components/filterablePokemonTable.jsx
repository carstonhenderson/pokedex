import React, { useState } from 'react'
import PokemonSearch from './pokemonSearch'
import PokemonTable from './pokemonTable'

const FilterablePokemonTable = ({ pokemon }) => {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <PokemonSearch value={filter} onChange={e => setFilter(e.target.value)} />
      <PokemonTable filter={filter} pokemon={pokemon} />
    </div>
  )
}

export default FilterablePokemonTable
