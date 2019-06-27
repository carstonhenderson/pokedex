import React from 'react'

const PokemonType = ({ type }) => {
  const colors = {
    Grass: 'green-500',
    Water: 'blue-500',
    Fire: 'red-500',
    Normal: 'gray-500',
    Fighting: 'red-700',
    Rock: 'orange-700',
    Ground: 'yellow-700',
    Poison: 'purple-500',
    Flying: 'blue-300',
    Psychic: 'pink-700',
    Dragon: 'orange-500',
    Electric: 'yellow-500',
    Steel: 'teal-700',
    Bug: 'green-700',
    Fairy: 'pink-500',
    Ice: 'teal-300',
    Ghost: 'indigo-700'
  }

  return (
    <div className={`text-center text-sm text-gray-300 px-2 py-1 border rounded border-${colors[type]} border-rounded mr-2`}>{type}</div>
  )
}

export default PokemonType
