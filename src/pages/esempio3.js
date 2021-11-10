import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const esempio3 = () => (
  <Layout>
    <Seo title="Esempio3" />
    DF73FF <br />
    FF2400 <br />
    C2B280 <br />
    FF00FF <br />
    D1E231 <br />
    4B0082 <br />
    FFD700 <br />
    01100100 01101001 01100110 01100110 01101001 01100011 01101001 01101100 01100101

    <p>
      Guarda la &nbsp; <Link to="/esempio2risolto/">soluzione</Link> 
    </p>
    
  </Layout>
)

export default esempio3
