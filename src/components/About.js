import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { GallaryCard } from './GallaryCard'
import { Link } from 'gatsby'


const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  background: var(--black);

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

const GallaryContainer = styled.div`
  width: 100%;
  height: auto;
  background: var(--black);
  color: var(--white);
  margin: 0 auto;
  text-align: center;

  .card-container{
    width: 80%;
    height: auto;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-bottom: 10rem;
    justify-content: center;
  }

  .section-second{
    width: 80%;
    margin: 0 auto;

    p{
      font-size: 3rem;
    }
  }
`

const titleAnimation = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: -100 }
};

const bodyAnimation = {
  visible: { x: 0, transition: { duration: .5 } },
  hidden: { x: -100 }
};

export const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const data = useStaticQuery(graphql`
  query Product {
    allSanityProduct {
      edges {
        node {
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
          collection{
            title
          }
          images {
            asset{
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
  `)

  const {allSanityProduct: { edges }} = data
  console.log(edges);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
      controls.start("hidden");
    }

  }, [controls, inView]);

  return (
    <>
    <Container>
      <div className="custom-shape-divider-top-1645069763">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
          </svg>
      </div>
    </Container>
    <GallaryContainer>
      <div className="card-container">
      {edges.map(item => {
        return(
          <Link to={`ch/${item.node.slug.current}`} key={item.node.id}>
            <GallaryCard title={item.node.title} images={item.node.images} cost={item.node.cost} sold={item.node.isSold} />
          </Link>
          )
      })}
      </div>
    </GallaryContainer>
    {/* <AboutContainer>
      <div className="section-second">
        <motion.h1
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={titleAnimation}
        >
        HELLO
        </motion.h1>
        <motion.p
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={bodyAnimation}
        style={{margin: '0'}}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit quod distinctio magnam reiciendis sed excepturi doloremque! Sit vitae non similique voluptate omnis atque fugit quidem molestias! Iste, corporis adipisci.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit quod distinctio magnam reiciendis sed excepturi doloremque! Sit vitae non similique voluptate omnis atque fugit quidem molestias! Iste, corporis adipisci.
        </motion.p>
      </div>
    </AboutContainer> */}
    </>
  )
}