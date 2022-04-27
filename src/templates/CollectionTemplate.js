import React from 'react'
import { SmallHeader } from '../components/navigation/SmallHeader'
import MobileNav from '../components/MobileNav'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GallaryCard } from '../components/GallaryCard'
import { Link } from 'gatsby'

const Container = styled.div`
  width: 100%;
  background: var(--black);
  margin-top: -5px;
  padding-top: 10rem;
  text-align: center;

  h4{
    padding-bottom: 2rem;
    color: var(--white);
  }

  .card-link{
    margin-top: 2rem;
  }
`

const CardContainer = styled.div`
  margin-top: 2rem;
`

const CollectionTemplate = ({ data: {products}, pageContext }) => {

  return (
    <>
      <MobileNav />
      <SmallHeader />
      <Container>
        <h4>{pageContext.title}</h4>
        {products.nodes.map((item) => {
          const link = `/${item.slug.current}`
          return(
            <CardContainer>
              <Link to={link} className='card-link' key={item.slug}>
                <GallaryCard title={item.title} key={item.id} images={item.images} cost={item.cost} sold={item.isSold} />
              </Link>
            </CardContainer>)
          })
        }
      </Container>
    </>
  )
}

export default CollectionTemplate

export const query = graphql`
  query($slug: String!){
    products: allSanityProduct(filter: {collection: {slug: {current: {eq: $slug}}}}) {
      nodes{
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
  }
`