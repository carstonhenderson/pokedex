import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FilterablePokemonTable from '../components/filterablePokemonTable'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Pokédex - All Pokémon" />
    <FilterablePokemonTable pokemon={data.allPokemon.nodes} />
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
            fixed(width: 50, height: 50, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
