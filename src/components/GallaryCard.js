import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const Card = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem;
  height: 400px;
  width: 300px;
  background: var(--white);
  border-radius: 20px;
  color: var(--black);
  width: 300px;

  .title{
    position: absolute;
    bottom: 50px;
  }

  .cost{
    position: absolute;
    bottom: 20px;
  }

`
export const GallaryCard = ({title, details, images, cost}) => {
  const firstImage = images[0]

  return (
    <Card>
      <GatsbyImage image={firstImage.asset.gatsbyImageData} alt={title}/>
      <h5 className="title">{title}</h5>
      <h5 className="cost">${cost}</h5>
    </Card>
  )
}
