import React from 'react'

const PokemonStat = ({ type, value }) => (
  <div className="flex justify-between pb-2 mb-4 border-b border-gray-500">
    {type}
    <span className="px-1 text-gray-100 border border-gray-500 rounded">
      {value}
    </span>
  </div>
)

export default PokemonStat
