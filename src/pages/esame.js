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
      width={600}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A test to prove you are worthy"
      style={{ marginBottom: `1.45rem` }}
    />
    
    <p> <br /> <br /> </p>
    <a href="https://hns.to/" target="_blank"> Ho risolto. </a>
    <p>PS: ricordati la pagina per immettere le soluzioni nei preferiti, così non perdi la via.</p>
  </Layout>
)

export default esame
