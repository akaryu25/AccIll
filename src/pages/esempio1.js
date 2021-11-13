import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const esempio1 = () => (
  <Layout>
    <Seo title="Esempio1" />
    
    <p>Quasi sEmpre il titolo dell'enigma &egrave; un'informazione indiSpEnsabile per risolverlo, quindi Mi raccomando non dimenticartene! In questo caso il titolo &egrave; "Accademia Oscura" e non aiuta in alcun modo a trovare la soluzione di questi esemPI, ma nOn sar&agrave; sempre cos&igrave;.</p>
  
    <StaticImage
      src="../images/esempio1.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The first piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p> </p>
    <p>
      Guarda la &nbsp;<Link to="/esempio1risolto/">soluzione</Link> <br />
    </p>
    
  </Layout>
)

export default esempio1
