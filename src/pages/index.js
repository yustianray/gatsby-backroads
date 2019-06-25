import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout.js'

export default () => (
    <Layout>
    Hello world! <Link to="/blog/">Blog Page</Link>
    <div className="container">
        <div className="row text-center">
            <div className="col-md-4">This</div>
            <div className="col-md-4">Is</div>
            <div className="col-md-4">Bootstrap</div>
        </div>
    </div>
    </Layout>
)
