import React from 'react'
import { Contact } from '../components/Contact'
import { SmallHeader } from '../components/navigation/SmallHeader'
import MobileNav from '../components/MobileNav'

const contact = () => {
  return (
    <>
      <MobileNav />
      <SmallHeader />
      <Contact />
    </>
  )
}

export default contact
