import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PokemonType from '../components/pokemonType'
import PokemonStat from '../components/pokemonStat'

export default ({ data, location }) => {
  const pokemon = data.pokemon

  return (
    <Layout>
      <SEO title={`${pokemon.name}`} />

      <AniLink
        duration={0.3}
        swipe
        direction="right"
        entryOffset={100}
        to="/"
        className="text-blue-300 hover:underline"
        state={{
          savedFilter: location.state.savedFilter,
          savedPage: location.state.savedPage,
        }}
      >
        Back
      </AniLink>

      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl flex items-center">
          <span className="text-sm text-gray-500 mr-2">#{pokemon.number}</span>
          {pokemon.name}
        </h1>

        <div className="flex -mr-2">
          {pokemon.type.map(type => (
            <div className="mr-2">
              <PokemonType type={type} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <Img fixed={pokemon.image.childImageSharp.fixed} alt={pokemon.name} />
      </div>

      <PokemonStat type="Attack" value={pokemon.base.Attack} />
      <PokemonStat type="Defense" value={pokemon.base.Defense} />
      <PokemonStat type="HP" value={pokemon.base.HP} />
      <PokemonStat type="Special Attack" value={pokemon.base.Sp__Attack} />
      <PokemonStat type="Special Defense" value={pokemon.base.Sp__Defense} />
      <PokemonStat type="Speed" value={pokemon.base.Speed} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    pokemon(fields: { slug: { eq: $slug } }) {
      number
      name
      type
      base {
        Attack
        Defense
        HP
        Sp__Attack
        Sp__Defense
        Speed
      }
      image {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }
`
