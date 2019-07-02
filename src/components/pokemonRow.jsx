import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PokemonType from './pokemonType'

const PokemonRow = ({ pokemon }) => {
  return (
    <Link
      className="flex justify-between px-4 py-4 hover:bg-gray-800 border-b border-gray-700"
      to={pokemon.fields.slug}
    >
      <div className="flex">
        <Img fixed={pokemon.image.childImageSharp.fixed} alt={pokemon.name} />
        <h2 className="flex items-center ml-2">
          <span className="text-sm text-gray-500 mr-2">#{pokemon.number}</span>
          {pokemon.name}
        </h2>
      </div>

      <div className="flex justify-end items-center -mr-2">
        {pokemon.type.map(type => (
          <div className="mr-2">
            <PokemonType type={type} />
          </div>
        ))}
      </div>
    </Link>
  )
}

export default PokemonRow
