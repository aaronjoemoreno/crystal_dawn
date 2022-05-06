import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import MobileNav from '../components/MobileNav'
import { SmallHeader } from '../components/navigation/SmallHeader'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: var(--black);
  margin-top: -5px;
  padding-top: 10rem;
  text-align: center;
  color: var(--white);
  padding-bottom: 10rem;

  h2{
    padding-botton: 1rem;
  }

  .img-container{
    width: 80%;
    margin: 0 auto;

    img{
      margin-top: 2rem;
    }
  }


  .cost{
    margin-top: 2rem;
    color: var(--white);
  }

  .bottom-price{
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: var(--white);
    margin: 0 auto;
    margin-top: 1rem;

    .sold{
      text-align: center;
      color: var(--black);
    }

    .sold-overlay{
      background: #000;
      opacity: 0.2
    }

    .sold-overlay: hover{
      background: none;
      opacity: 1;
      transition: opacity 0.5s; /* Transition should take 0.3s */
      -webkit-transition: opacity 0.5s; /* Transition should take 0.3s */
    }
}
`

const ProductTemplate = ({data}) => {
  console.log(data)

  const { products: { title , isSold, images, cost} } = data;
  return (
    <>
      <MobileNav />
      <SmallHeader />
      <Container>
        <h2>{title}</h2>
        <div className="img-container">
          {images.map((img) => {
            return(<GatsbyImage image={img?.asset?.gatsbyImageData} alt={title} clasName='product-img' />)
          })}
          <h3 className="cost">${cost}</h3>
          <div className="bottom-price">
            {isSold == false &&
              <h4 className="sold">Buy</h4>
            }
            {isSold != false &&
              <h4 className="sold">Sold</h4>
            }
          </div>
        </div>
      </Container>
    </>
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