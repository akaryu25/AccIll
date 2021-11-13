import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Benvenuto/a nell'Accademia Oscura.</p>
    <p>Sono qui per guidarti nell' intraprendere la strada verso l'Oscurit&agrave; degli Enigmi. Non temere, lo scopo dell'accademia &egrave; quello di darti le conoscenze base per comprendere gli Enigmi.
    <br />Solo chi sarà in grado di risolverli raggiungerà la terra promessa.</p>
  
    <p>Per iniziare &nbsp;<Link to="/intro/">qui</Link> troverai le regole e degli esempi guidati. Prova a risolverli!
    </p>
  <p>
    Se invece pensi di essere già pronto &nbsp;<Link to="/esame/">questo</Link> è il test per entrare nell'accademia.
  </p>
  </Layout>
)

export default IndexPage
