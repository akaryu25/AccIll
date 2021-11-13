import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const hint = () => (
  <Layout>
    <Seo title="Hint" />
  <p>
    Una volta decifrata l'immagine capirai in che contesto va ricercata la frase.
    <br /> Visto che questo è il tuo primo test, ho deciso di darti un aiutino. Sarà l'ultimo ricorda!
    <br /> Può capitare che la risoluzione necessiti di informazioni che non hai, e che dovranno essere cercate.
    <br /> Questo vuol dire che in alcuni casi conviene fare un'attenta ricerca su Wikipedia o Google per esempio.
    <br /> In questo caso troverai che le esatte parole nella frase continuano con la soluzione dell'Enigma... Se sei nel posto giusto ovviamente!
  </p>
  <p>Infine alcuni codici saranno facili da decifrare, altri meno. Prima di perdere ogni speranza, prova a cercare il codice su Google. Molto probabilmente non troverai nulla ma tentar non nuoce, soprattutto se hai gi&agrave; provato vari modi per decifrarlo e non hanno portato risultati. In quel caso potrebbe proprio essere che il codice sia un'etichetta di qualche tipo e lo troverai subito sul motore di ricerca.</p>
  <p> <Link to="/esame/">Torna indietro</Link></p>
  </Layout>
)

export default hint
