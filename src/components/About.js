import React, { useRef } from 'react'
import styled from 'styled-components'
import { useIntersection } from "react-use";
import gsap from "gsap";

const Container = styled.div`
  width: 100%;
  height: 50vh;
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

const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  background: var(--pink);

  .section-second{
    width: 80%;
    margin: 0 auto;

    p{
      font-size: 3rem;
    }
  }
`

export const About = () => {

  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: .4
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < .4
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <>
    <Container>
      <div class="custom-shape-divider-top-1645069763">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
      </div>
    </Container>
    <AboutContainer>
      <div className="section-second" ref={sectionRef}>
        <h1 className='fadeIn'>HELLO</h1>
        <p className="fadeIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit quod distinctio magnam reiciendis sed excepturi doloremque! Sit vitae non similique voluptate omnis atque fugit quidem molestias! Iste, corporis adipisci.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit quod distinctio magnam reiciendis sed excepturi doloremque! Sit vitae non similique voluptate omnis atque fugit quidem molestias! Iste, corporis adipisci.
        </p>
      </div>
    </AboutContainer>
    </>
  )
}
