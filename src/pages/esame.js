import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const esame = () => (
  <Layout>
    <Seo title="Esame" />
    <p>Oltre che solitario è anche... </p>
  <p></p>
    <StaticImage
      src="../images/esame.png"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A test to prove you are worthy"
      style={{ marginBottom: `1.45rem` }}
    />
   
   <p> <br /> <br /> </p>
    <a href="https://hns.to/" target="_blank"> Ho risolto. </a> 
    <br /> PS: puoi mettere questa pagina tra i preferiti così non la perdi
    <br /> <Link to="/hint/">Non trovo la soluzione</Link>
  </Layout>
)

export default esame
