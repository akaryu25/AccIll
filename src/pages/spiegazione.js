import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const spiegazione = () => (
  <Layout>
    <Seo title="Spiegazione" />
    Ogni Enigma è in realtà un sito web statico.
    <a href="https://www.pumabrowser.com/" target="_blank">https://www.pumabrowser.com/ </a>
    <br />Altrimenti impostando il DNS primario 103.196.38.38 e secondario 103.196.38.39
  </Layout>
)

export default spiegazione
