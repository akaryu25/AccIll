import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const esempio2 = () => (
  <Layout>
    <Seo title="Esempio2" />
    <p> 
    Elicottero rumoroso <br /> Sasso bianco <br /> Edera verde <br /> Musica soave <br /> Pittura artistica <br /> Intelligenza artificiale <br /> Onda quadra 
    </p>
    <p>
    mneudsirau
    </p>

    <p>
      Guarda la &nbsp; <Link to="/esempio2risolto/">soluzione</Link> 
    </p>
    
  </Layout>
)

export default esempio2
