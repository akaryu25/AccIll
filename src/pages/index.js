import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Benvenuto/a nell'Accademia Oscura.</p>
    <p>Sono qui per guidarti ad intraprendere la strada verso l'Oscurit&agrave;. Non temere, &egrave; solo un sostantivo femminile che serve ad indicare la mancanza o insufficienza di luce. Vedi, lo scopo dell'accademia &egrave; quello di darti le conoscenze base per risolvere gli Enigmi.</p>
    <p>Ogni Enigma &egrave; indicato con l'associazione di un nome e un aggettivo, ad esempio "Accademia Oscura"</p>
    <p>La soluzione di ogni Enigma porter&agrave; sempre a quello successivo, quindi avr&agrave; sempre questa forma.</p>
    <p><Link to="/esempio1/">Qui</Link> troverai degli esempi guidati. Prova a risolverli!</p>
    <p> </p>
 
  </Layout>
)

export default IndexPage
