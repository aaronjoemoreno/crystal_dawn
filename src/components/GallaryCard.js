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
  margin: 0 auto;


  &:hover{
    cursor: pointer;
  }

  .title{
    position: absolute;
    bottom: 50px;
  }

  .bottom-price{

    .cost{
      position: absolute;
      bottom: 20px;
      color: var(--black);
    }

    .sold{
      width: 70px;
      padding: 5px 0px 5px 0px;
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
  }
`
export const GallaryCard = ({title, images, cost, sold}) => {

  let firstImage;
  //TODO - Clean up
  if(images) firstImage = images[0]

  return (
    <Card>
      <GatsbyImage image={firstImage?.asset?.gatsbyImageData} alt={title} className={ sold == false ? "sold-overlay" : ""} />
      <h3 className="title">{title}</h3>

      <div className="bottom-price">
        <h3 className="cost">${cost}</h3>
        {sold == false &&
          <h4 className="sold">Sold</h4>
        }
      </div>
    </Card>
  )
}
