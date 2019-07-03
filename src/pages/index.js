import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout.js'
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default () => (
    <Layout>
        <SimpleHero>
            <Banner title="continue exploring" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, pariatur.">
                <Link to="/tours" className="btn-white">
                    explore tours
                </Link>
            </Banner>
        </SimpleHero>
        <About />
    </Layout>
)
