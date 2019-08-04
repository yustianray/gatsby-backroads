import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from "../examples/RegularHeader"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default class tours extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Tours" />
                <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
            </Layout>
        )
    }
}

export const query = graphql`
    query {
        defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}) {
            childImageSharp {
                fluid(quality:90, maxWidth:4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
