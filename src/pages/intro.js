import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const intro = () => (
  <Layout>
    <Seo title="Intro" />
    <p> Prima di iniziare ecco le regole del gioco: </p>
    <p>Ogni Enigma &egrave; indicato con l'associazione di un nome e un aggettivo, ad esempio "Accademia Oscura".
    <br />La soluzione di ogni Enigma porter&agrave; sempre a quello successivo, quindi avr&agrave; ancora questa forma.
    <br />Gli Enigmi saranno solo in italiano, ma potranno comparire altre lingue che quindi dovranno essere intese come indizi.
    <br />Per tornare alla pagina principale dell'Enigma premi sul nome nella parte rossa in alto.
    <br />Se pensi di aver trovato la soluzione, vai su &nbsp;<a href="https://hns.to/" target="_blank"> https://hns.to/ </a> e digita nella barra in alto la soluzione senza spazi.
    <br />Per esempio se la soluzione è "Sito strano" digita "sitostrano" e premi invio. Se la risposta è corretta verrai mandato all'Enigma successivo. Altrimenti riceverai un errore oppure, in un caso molto raro potresti finire in qualche altro sito.&nbsp;<Link to="/spiegazione/">Perchè questo?</Link> 
    <br />Non verranno dati indizi finchè non arriverete alla terra promessa. Se rimanete bloccati, provate a chiedere ad altre persone di aiutarvi. L'unione fa la forza!
    <br />Non ci sono altre regole.
    </p>
    <p>
      Buona fortuna! &nbsp;<Link to="/esempio1/">Procedi con il tutorial</Link>.
    </p>
  </Layout>
)

export default intro
