import React, { useState } from 'react'
import PokemonSearchFilter from './pokemonSearchFilter'
import PaginatedPokemonTable from './paginatedPokemonTable'

const FilterablePokemonTable = ({ pokemon }) => {
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)

  const start = (page - 1) * 10
  const end = page * 10

  return (
    <div>
      <PokemonSearchFilter
        value={filter}
        onChange={e => {
          setFilter(e.target.value)
          setPage(1)
        }}
      />
      <PaginatedPokemonTable
        filter={filter}
        pokemon={pokemon}
        start={start}
        end={end}
        handlePrevious={() => setPage(page - 1)}
        handleNext={() => setPage(page + 1)}
      />
    </div>
  )
}

export default FilterablePokemonTable
