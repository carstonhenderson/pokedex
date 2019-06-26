import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const pokemon = data.pokemon

  return (
    <Layout>
      <Link to="/" className="text-blue-300 hover:underline">
        Back
      </Link>
      <h1>
        #{pokemon.number} - {pokemon.name}
      </h1>

      <h2>{pokemon.type.join('/')}</h2>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    pokemon(fields: { slug: { eq: $slug } }) {
      number
      name
      type
    }
  }
`