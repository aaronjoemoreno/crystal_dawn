import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const Card = styled.div`
  position: relative;
  padding: 2rem;
  height: 400px;
  width: 300px;
  background: var(--white);
  border-radius: 20px;
  color: var(--black);
  width: 300px;

  &:hover{
    cursor: pointer;
  }

  .title{
    position: absolute;
    bottom: 50px;
  }

  .cost{
    position: absolute;
    bottom: 20px;
  }

  .sold{
    width: 70px;
    padding: 3px 0px 3px 0px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    right: 15px;
    background: var(--black);
    color: var(--white);
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

`
export const GallaryCard = ({title, images, cost, sold}) => {
  const firstImage = images[0]

  return (
    <Card>
      <GatsbyImage image={firstImage.asset.gatsbyImageData} alt={title} className={ sold == false ? "sold-overlay" : ""} />
      <h5 className="title">{title}</h5>
      <h5 className="cost">${cost}</h5>
      {sold == false &&
        <h5 className="sold">Sold</h5>
      }
    </Card>
  )
}
