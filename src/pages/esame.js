import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const esame = () => (
  <Layout>
    <Seo title="Esame" />
    <p>Oltre che solitario è anche... </p>
    <StaticImage
      src="../images/esame.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />


    <p> <br /> <br /> </p>
    <a href="https://hns.to/" target="_blank"> Ho risolto. </a>
  </Layout>
)

export default esame
