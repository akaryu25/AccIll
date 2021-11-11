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
   
    
  </Layout>
)

export default esame
