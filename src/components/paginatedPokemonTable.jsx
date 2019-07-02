import React from 'react'
import PokemonTable from './pokemonTable'
import PokemonPagination from './pokemonPagination'

const PaginatedPokemonTable = ({
  filter,
  page,
  pokemon,
  start,
  end,
  handlePrevious,
  handleNext,
}) => {
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

  if (filteredPokemon.length > 0) {
    return (
      <>
        <PokemonTable
          pokemon={filteredPokemon.slice(start, end)}
          filter={filter}
          page={page}
        />

        <PokemonPagination
          handlePrevious={handlePrevious}
          handleNext={handleNext}
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
