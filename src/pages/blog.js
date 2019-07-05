import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Images from "../examples/Images"

const blog = ({data}) => {

  return (
    <Layout>
      Hello from blog page <Link to="/">back home</Link>
      <Images />
    </Layout>
  )
}

export default blog
