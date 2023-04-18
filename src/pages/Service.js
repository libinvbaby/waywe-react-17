import React from 'react'
import BlogHome from '../components/home/BlogHome'
import { Helmet } from 'react-helmet';

const Service = () => {
  return (

    <>
       <Helmet>
              
              <title>Services -  Way WeDesign</title>
              <meta name="description" content="Service" />
</Helmet>
        <BlogHome/>
    </>
  )
}

export default Service