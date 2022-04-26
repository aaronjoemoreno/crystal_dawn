import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 20rem;
  color: var(--black);

  .title{
    font-family: var(--main-font);
    margin-bottom: 10rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
  }

  .links{
    width: 100%;

    ul{
      padding-inline-start: 0;
      display: grid;
      text-align: center;
      grid-template-columns: 1fr 1fr;
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
          id
          title
          slug{
            current
          }
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
              return(<Link to={navItem.slug.current} key={navItem.id}><h4>{navItem.title}</h4></Link>)
            })}
            </ul>
          </div>
    </Container>
  )
}