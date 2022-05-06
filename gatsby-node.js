const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const collectionTemplate = path.resolve(`src/templates/CollectionTemplate.js`)
  const productTemplate = path.resolve(`src/templates/ProductTemplate.js`)

  const { data } = await graphql(`
    query {
      collections: allSanityCollection{
        nodes  {
          title,
          description,
          slug{
            current
          }
        }
      }
      products: allSanityProduct{
        nodes  {
          title,
          slug{
            current
          }
        }
      }
    }
  `)

  data.collections.nodes.forEach(collection => {
    createPage({
      path: `${collection.slug.current}`,
      component: collectionTemplate,
      context: {title: collection.title, description: collection.description || "Collection Details Coming Soon", slug: collection.slug.current},
      defer: true,
    })
  })

  data.products.nodes.forEach(product => {
    createPage({
      path: `${product.slug.current}`,
      component: productTemplate,
      context: {title: product.title, description: product.description || "Product Details Coming Soon", slug: product.slug.current},
      defer: true,
    })
  })
}
