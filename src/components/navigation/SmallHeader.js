import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
text-align: center;
background: var(--white);
padding-top: 5rem;

.title{
  font-family: var(--main-font);
  color: var(--black);
  text-transform: uppercase;
  letter-spacing: 1rem;
}

.custom-shape-divider-top-1645069763 .shape-fill {
  position: absolute;
  fill: var(--black);
}
`

export const SmallHeader = () => {
  return(
  <Container>
    <h1 className="title">Crystal Dawn</h1>
    <div className="custom-shape-divider-top-1645069763">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
      </svg>
    </div>
  </Container>
  )
};
