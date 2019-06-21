import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PokemonTable from '../components/pokemonTable'

const IndexPage = ({ data }) => (
  <Layout>
    <PokemonTable pokemon={data.allPokemon.nodes}/>
  </Layout>
)

export const query = graphql`
  query {
    allPokemon {
      nodes {
        number
        name
        type
        fields {
          slug
        }
        base {
          HP
          Attack
          Defense
          Sp__Attack
          Sp__Defense
          Speed
        }
        image {
          childImageSharp {
            fixed(width: 125, height: 125, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage