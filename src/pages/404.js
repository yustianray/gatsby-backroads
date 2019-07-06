import React from "react"
import Layout from "../components/Layout.js"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner.js"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
