import React from "react"
import Layout from "../components/Layout.js"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner.js"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's dead end">
          <Link to="/" className="btn-white">
            back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
