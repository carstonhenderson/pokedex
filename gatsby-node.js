const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Pokemon') {
    const slug = `/${node.name.toLowerCase()}`

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allPokemon {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allPokemon.nodes.forEach(pokemon => {
      createPage({
        path: pokemon.fields.slug,
        component: path.resolve(`./src/templates/pokemon.jsx`),
        context: {
          slug: pokemon.fields.slug,
        },
      })
    })
  })
}
