import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PokemonType from './pokemonType'

const PokemonRow = ({ pokemon }) => {
  return (
    <Link
      className="flex justify-between border rounded border-gray-700 shadow mb-4 p-4 hover:bg-gray-800 hover:shadow-lg"
      to={pokemon.fields.slug}
    >
      <div className="w-1/3">
        <Img fixed={pokemon.image.childImageSharp.fixed} alt={pokemon.name} />
      </div>

      <h2 className="w-1/3 flex justify-center items-center">
        <span className="text-sm text-gray-500 mr-2">#{pokemon.number}</span>
        {pokemon.name}
      </h2>

      <div className="flex w-1/3 justify-end items-center -mr-2">
        {pokemon.type.map(type => (
          <PokemonType type={type} />
        ))}
      </div>
    </Link>
  )
}

export default PokemonRow
