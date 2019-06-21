import React from 'react'
import { Link } from 'gatsby'

const PokemonTable = ({ pokemon }) => (
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>

    <tbody>
      {pokemon.map(pokemon => (
        <tr>
          <td>{pokemon.number}</td>
          <td>
            <Link
              to={pokemon.fields.slug}
              className="text-blue-300 hover:underline"
            >
              {pokemon.name}
            </Link>
          </td>
          <td>{pokemon.type.join('/')}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default PokemonTable
