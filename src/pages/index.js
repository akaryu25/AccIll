import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Benvenuto/a nell'Accademia Oscura.</p>
    <p>Sono qui per guidarti nell' intraprendere la strada verso l'Oscurit&agrave;. Non temere, &egrave; solo un sostantivo femminile che serve ad indicare la mancanza o insufficienza di luce. Vedi, lo scopo dell'accademia &egrave; quello di darti le conoscenze base per comprendere gli Enigmi.
    <br />Gli Enigmi ti porteranno in un posto buio, e servirà orientarsi tramite le proprie abilità. Solo chi sarà in grado di risolverli raggiungerà la terra promessa.</p>
  
    <p>Tranquillo/a, per iniziare &nbsp;<Link to="/esempio1/">qui</Link> troverai degli esempi guidati. Prova a risolverli!</p>
    Se invece pensi di essere già pronto &nbsp;<Link to="/test/">questo</Link> è il test per entrare nell'accademia e iniziare a risolvere gli enigmi.
 
  </Layout>
)

export default IndexPage
