import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const spiegazione = () => (
  <Layout>
    <Seo title="Spiegazione" />
  <p>
    Ogni Enigma è in realtà un sito web statico.
    <br />L'indirizzo del sito è ".accademiaoscura", molto più comodo di "accademiaoscura.com".
    <br />Per fare questo però è necessario utilizzare DNS compatibili, tipo impostando il DNS primario 103.196.38.38 e secondario 103.196.38.39
    <br />Facendo ciò ci si affida a quel servizio e bisogna sperare che non utilizzino male i nostri dati. Molto meglio utilizzare <a href="https://hns.to/" target="_blank"> questo </a>  sito che farà da ponte.
    <br />Altrimenti, si possono usare browser compatibili tipo <a href="https://www.pumabrowser.com/" target="_blank">https://www.pumabrowser.com/ </a> o l'estensione per chrome <a href="https://chrome.google.com/webstore/detail/bob-extension/ogcmjchbmdichlfelhmceldndgmgpcem" target="_blank">Bob Extension </a>
    <br />Quindi digitando la risposta sbagliata si potrebbe finire in un altro sito, in quel caso lo si capirà chiaramente visto che ogni sito Enigma è strutturato allo stesso modo.
  </p>
  <p> <Link to="/intro/">Torna indietro</Link></p>
  </Layout>
)

export default spiegazione
