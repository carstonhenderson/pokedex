import React, { useState } from 'react'
import PokemonSearchFilter from './pokemonSearchFilter'
import PaginatedPokemonTable from './paginatedPokemonTable'

const FilterablePokemonTable = ({ pokemon }) => {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <PokemonSearchFilter value={filter} onChange={e => setFilter(e.target.value)} />
      <PaginatedPokemonTable filter={filter} pokemon={pokemon} />
    </div>
  )
}

export default FilterablePokemonTable
