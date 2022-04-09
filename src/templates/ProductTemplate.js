import React from 'react'
import { graphql } from 'gatsby'

const ProductTemplate = () => {
  return (
    <div>ProductTemplate</div>
  )
}

export default ProductTemplate

export const query = graphql`
  query($slug: String!){
    products: sanityProduct(slug: {current: {eq: $slug}}) {
      title
      id
      isSold
      cost
      link
      title
      tags
      snippet
      slug{
        current
      }
      images {
        asset{
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`