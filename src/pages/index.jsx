import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FilterablePokemonTable from '../components/filterablePokemonTable'

const IndexPage = ({ data, location }) => (
  <Layout>
    <SEO title="All Pokémon" />
    <FilterablePokemonTable
      pokemon={data.allPokemon.nodes}
      savedFilter={location.state ? location.state.savedFilter : ''}
      savedPage={location.state ? location.state.savedPage : 1}
    />
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
