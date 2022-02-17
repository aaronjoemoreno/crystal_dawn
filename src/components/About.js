import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--pink);

  .custom-shape-divider-top-1645069763 {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1645069763 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 248px;
}

.custom-shape-divider-top-1645069763 .shape-fill {
    fill: #fff;
}

`

export const About = () => {
  return (
    <Container>
      <div class="custom-shape-divider-top-1645069763">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
      </div>
    </Container>
  )
}
