import React from 'react'

const PokemonSearch = ({ value, onChange }) => {
  return (
    <input
      className="appearance-none bg-gray-100 text-gray-900 border rounded py-2 px-4 block w-full mb-8"
      type="text"
      placeholder="Search Pokémon by name or type"
      value={value}
      onChange={onChange}
      aria-label="Search Pokémon name/type"
    />
  )
}

export default PokemonSearch
