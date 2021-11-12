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
  <p> <Link to="/esame/">Torna indietro</Link></p>
  </Layout>
)

export default hint
