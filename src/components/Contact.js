import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin-top: -10px;
  background: var(--black);

  .custom-form{
    padding-top: 10rem;
  }
`

export const Contact = () => {
  return (
    <Container>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className='custom-form'>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" id="name" placeholder="name"/>
        <input type="email" name="email" id="email" placeholder="email"/>
        <input type="tel" name="phone" id="phone" placeholder="phone"/>
        <textarea name="message" id="message" placeholder="message us" rows="3" />
        <button type="submit">Replace Button Soon</button>
      </form>
    </Container>
  )
}
