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
    <p> </p>
    <p>I pi&ugrave; difficili sono solitamente quelli che contengono codici particolari che bisogna conoscere per decifrare. Ad esempio supponendo di non sapere questa codifica, baster&agrave; cercare su Google "DF73FF" e si trover&agrave; subito la corrispondenza per un colore. Questo colore &egrave; chiamato Eliotropo. La tabella dei colori &egrave; facilmente consultabile su Wikipedia, cos&igrave; come molti altri codici. Insieme a Eliotropo le iniziali degli altri colori formano la parola ESEMPIO.</p>
    <p>Ci sono siti specializzati nella codifica/decodifica, non aver paura ad utilizzare quelli. Dovrai solo scoprire quale tipo di "cifrario" &egrave; stato usato. Il secondo indizio &egrave; un codice binario, che va tradotto in qualche modo. Ci sono siti come &nbsp <a href="https://traduttorebinario.com/">questo</a> che permettono di convertire il binario in un testo. Si ottiene cos&igrave; la parola "difficile".</p>
    <p>La soluzione sar&agrave; ESEMPIO DIFFICILE.</p>
    <p>
      <Link to="/esame/">Prova ad entrare nell'accademia! </Link> 
    </p>
    
  </Layout>
)

export default esempio3
