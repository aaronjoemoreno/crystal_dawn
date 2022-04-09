import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin-top: -5px;
  background: var(--black);
  text-align: center;

  h4{
    color: var(--white);
    padding-top: 5rem;
  }

  .custom-form{
    padding-top: 5rem;
  }

  form{
    width: 100%;

    input, textarea{
      margin: 0 auto;
      margin-top: 2rem;
      display: block;
    }
    input{
      min-height: 3rem;
      min-width: 60%;
    }
    textarea{
      min-width: 60%;
      margin-bottom: 5rem;
    }
    .btn{
      box-sizing: border-box;
      display: block;
      width: 20%;
      min-width: 200px;
      height: 30px;
      line-height: 25px;
      margin: 0 auto;
      border: 1px solid var(--white);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-button);
      text-align: center;
      font-size: auto;
      background: var(--white);

      &:hover{
        cursor: pointer;
        background: var(--black);
        border: 1px solid var(--white);
        color: var(--white);
      }
    }
  }
`

export const Contact = () => {
  return (
    <Container>
      <h4>Contact</h4>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className='custom-form'>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" id="name" placeholder="name"/>
        <input type="email" name="email" id="email" placeholder="email"/>
        <input type="tel" name="phone" id="phone" placeholder="phone"/>
        <textarea name="message" id="message" placeholder="message me 👋" rows="3" />
        <button type="submit" className='btn'>Submit</button>
      </form>
    </Container>
  )
}
