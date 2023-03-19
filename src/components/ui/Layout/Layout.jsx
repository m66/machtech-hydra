import React from 'react'

import RoutesLayout from '../../../routes/Routes'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({backdropHandler}) => {
  return (
    <>
        <Header backdropHandler={backdropHandler}/>
        <RoutesLayout />
        <Footer />
    </>
  )
}

export default Layout