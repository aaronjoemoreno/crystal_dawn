import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  text-align: center;
  padding-top: 20rem;
  color: var(--black);

  .icon{
    width: 200px;
    margin: 0 auto;
    position: relative;

    h2{
      position: absolute;
      color: white;
      left: 0;
      right: 0;
      top: 75px;
    }
  }
  .title{
    font-family: var(--main-font);
    margin-bottom: 10rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
  }

  .links{
    width: 80%;
    margin: 0 auto;

    ul{
      display: flex;
      justify-content:  space-between;
    }

    li{
      list-style-type: none;
    }
  }

`

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query collections {
      allSanityCollection{
        nodes  {
          title
        }
      }
    }
  `)

  const { allSanityCollection: { nodes } } = data
  console.log(nodes);

  return(
    <Container>
          {/* <div className="icon">
            <h2>CHD</h2>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" d="M55.5,-45.4C67.7,-29,70.4,-6.1,66.8,17.4C63.1,40.9,53,65,34.2,75.9C15.5,86.7,-12,84.3,-32.7,72.6C-53.4,60.8,-67.3,39.7,-73.6,15.8C-79.8,-8.1,-78.4,-34.7,-64.8,-51.5C-51.3,-68.3,-25.6,-75.2,-2,-73.6C21.6,-72,43.3,-61.9,55.5,-45.4Z" transform="translate(100 100)" />
            </svg>
          </div> */}
          <h1 className="title">Crystal Dawn</h1>
          <div className="links">
            <ul>
            {nodes.map(navItem => {
              return(<li><h5>{navItem.title}</h5></li>)
            })}
            </ul>
          </div>
    </Container>
  )
}