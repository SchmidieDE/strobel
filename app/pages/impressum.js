import Subtitel from "../comp/design/subtitle";
import Subtext from "../comp/design/subtext";
import Title from "../comp/design/title"


const Impressum = () => {
    return ( <>
        <Title text={"Impressum"} variant={"bigcenter"}/>
        <Subtitel text={"Angaben gemäß § 5 TMG"} variant={"left"}/>
        <Subtext variant="white" text={<>
            <strong style={{fontWeight: "800"}}>Peter und Hannes Strobel GbR</strong><br/>
            Im Wiesengrund 3<br/>
            88361 Eichstegen<br/><br/>

            Steuer-Nr: 85094/04413<br/><br/>
            USt-IdNr: DE275848798<br/><br/>


            <strong style={{fontWeight: "800"}}>Kontakt</strong><br/>
            E-Mail: hannes-strobel@gmx.de<br/><br/>

            <strong style={{fontWeight: "800"}}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong><br/>
            Peter und Hannes Strobel GbR<br/>
            Im Wiesengrund 3<br/>
            88361 Eichstegen<br/>
        </>} />
        <Subtitel text={"Haftungsausschluss"} variant={"left"}/>
        <Subtext variant="white" text={<>
            <strong style={{fontWeight: "800"}}>Haftung für Inhalte</strong><br/>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </>} />
        <Subtext variant="white" text={<>
            <strong style={{fontWeight: "800"}}>Haftung für Links</strong><br/>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </>} />
        <Subtext variant="white" text={<>
            <strong style={{fontWeight: "800"}}>Urheberrecht</strong><br/>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </>} />
    </> );
}
 
export default Impressum;