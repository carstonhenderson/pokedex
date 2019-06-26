import React from 'react'
import { Link } from 'gatsby'

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
    <table className="table-auto w-full">
      <thead>
        <tr className="border-b border-gray-500">
          <th className="text-left p-2">#</th>
          <th className="p-2">Name</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {filteredPokemon.map(pokemon => (
          <tr>
            <td className="py-4 pl-4">{pokemon.number}</td>
            <td className="text-center py-4">{pokemon.name}</td>
            <td className="text-center">{pokemon.type.join('/')}</td>
            <td className="text-right pr-4">
              <Link
                to={pokemon.fields.slug}
                className="border border-blue-500 rounded px-4 py-2 hover:bg-blue-500 hover:text-gray-900"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PokemonTable
