import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const esempio1risolto = () => (
  <Layout>
    <Seo title="Esempio1risolto" />
    <p>Quasi sEmpre il titolo dell'enigma &egrave; un'informazione indiSpEnsabile per risolverlo, quindi Mi raccomando non dimenticartene! In questo caso il titolo &egrave; "Accademia Oscura" e non aiuta in alcun modo a trovare la soluzione di questi esemPI, ma nOn sar&agrave; sempre cos&igrave;.</p>
    <p>Alcuni codici saranno facili da decifrare, altri meno. Prima di perdere ogni speranza, prova a cercare il codice su Google. Molto probabilmente non troverai nulla ma tentar non nuoce, soprattutto se hai gi&agrave; provato vari modi per decifrarlo e non hanno portato risultati. In quel caso potrebbe proprio essere che il codice sia un'etichetta di qualche tipo e lo troverai subito sul motore di ricerca.</p>
    <StaticImage
      src="../images/esempio1.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The first piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Puoi notare che ci sono delle lettere maiuscole, questi errori non sono a caso. Se segni ogni lettera maiuscola che non dovrebbe essere tale otterrai:</p>
    <p>E S E M P I O</p>
    <p>Le maiuscole dopo il punto sono corrette e quindi vanno ignorate, per questo non vengono tenute in considerazione Q di Quasi e A,O di Accademia Oscura.</p>
    <p>La seconda parte &egrave; un numero e una bandiera, quindi sicuramente un codice. Provando ad associare 1 alla prima lettera dell'alfabeto, 2 alla seconda e avanti cos&igrave;, si avr&agrave; che&nbsp;</p>
    <p>6 1 = F A</p>
    <p>Ora la bandiera in questione &egrave; quella del Cile. La risposta sar&agrave; quindi ESEMPIO FACILE. Se non si ottiene un nome e un aggettivo nella risposta finale dell'enigma allora si &egrave; sicuramente sulla strada sbagliata.</p>
    <p>
      Vai al &nbsp;<Link to="/esempio2">prossimo</Link> <br />
    </p>
    
  </Layout>
)

export default esempio1risolto
