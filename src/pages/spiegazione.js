import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const spiegazione = () => (
  <Layout>
    <Seo title="Spiegazione" />
    Ogni Enigma è in realtà un sito web statico. Il titolo corrisponde proprio al <em>Top Level Domain</em> dell'indirizzo del sito. Quindi, in questo caso invece di essere per esempio "www.accademiaoscura.com" è semplicemente ".accademiaoscura". 
    Per visitarli bisogna però utilizzare Broswer compatibili tipo <a href="https://www.pumabrowser.com/" target="_blank">https://www.pumabrowser.com/ </a>
    <br />Altrimenti impostando il DNS primario 103.196.38.38 e secondario 103.196.38.39 si possono visitare direttamente dal proprio broswer. Per quanto sia comoda questa opzione, in questo modo bisogna fidarsi dei fornitori del servizio sul fatto che non registrino i nostri dati.
     
    <p> Morale della favola: la soluzione migliore è quella di aprire <a href="https://hns.to/" target="_blank"> https://hns.to/ </a> e digitare nella barra in alto la soluzione senza spazi.
   
    <p><Link to="/intro/">Torna indietro</Link></p>
  </Layout>
)

export default spiegazione
