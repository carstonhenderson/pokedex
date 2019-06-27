import React, { useState } from 'react'
import PokemonTable from './PokemonTable'
import PokemonPagination from './PokemonPagination'

const PaginatedPokemonTable = ({ filter, pokemon }) => {
  const [page, setPage] = useState(1)

  const start = (page - 1) * 10
  const end = page * 10

  const filteredPokemon = pokemon
    .filter(pokemon => {
      const nameMatches = pokemon.name
        .toLowerCase()
        .includes(filter.toLowerCase())

      const typeMatches =
        pokemon.type.filter(type => {
          return type.toLowerCase().includes(filter.toLowerCase())
        }).length > 0

      return nameMatches || typeMatches
    })

    if (filteredPokemon.length > 0) {
      return (
        <>
          <PokemonTable pokemon={filteredPokemon.slice(start, end)} />
          <PokemonPagination
            handlePrevious={() => setPage(page - 1)}
            handleNext={() => setPage(page + 1)}
            start={start + 1}
            end={end}
            total={filteredPokemon.length}
          />
        </>
      )
    } else {
      return (
        <div className="text-gray-500 text-center my-16">No results found</div>
      )
    }
}

export default PaginatedPokemonTable
