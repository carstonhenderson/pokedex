import React from 'react'

const PokemonPagination = ({
  handlePrevious,
  handleNext,
  start,
  end,
  total,
}) => (
  <div className="mb-4">
    <div className="text-gray-500 text-center mb-4">
      Showing {start} - {end > total ? total : end} of {total} results
    </div>

    <div className="flex justify-between">
      <button
        disabled={start === 1}
        onClick={handlePrevious}
        className={`w-1/3 px-4 py-2 text-center border border-gray-500 rounded ${
          start === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Previous
      </button>

      <button
        disabled={end >= total}
        onClick={handleNext}
        className={`w-1/3 px-4 py-2 text-center border border-gray-500 rounded ${
          end >= total ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
      </button>
    </div>
  </div>
)

export default PokemonPagination
