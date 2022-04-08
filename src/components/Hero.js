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

  return(
    <Container>
          <h1 className="title">Crystal Dawn</h1>
          <div className="links">
            <ul>
            {nodes.map(navItem => {
              return(<li key={navItem.title}><h5>{navItem.title}</h5></li>)
            })}
            </ul>
          </div>
    </Container>
  )
}