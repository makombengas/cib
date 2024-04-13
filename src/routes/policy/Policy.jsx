
import { carouselBannerPictures } from '../../carouselBannerImage';
import  './policy.scss';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div className='policyContainer'>
        <div className="topBanner">
                    <img src={carouselBannerPictures.policy} alt="" />
                <div className="bannerImage">
                     <h1>Datenschutzerklärung</h1>
                </div>
            </div>
            <div className="policyContent">
                <div className="topContent">
                    <span>
                        Das Centrum für Integration und Bildung e.V. ( CIB ) nimmt den Schutz Ihrer persönlichen Daten sehr ernst und informieren Sie im Folgenden über den Umgang mit Ihren Daten.
                    </span>
                    <h2>
                        Erhebung und Verarbeitung persönlicher Daten
                    </h2>
                    <p>
                        Sämtliche Datenverarbeitungsvorgänge (Erhebung, Verarbeitung und Nutzung) durch das CIB erfolgen unter strikter Beachtung der gesetzlichen Datenschutzvorschriften.
                        Grundsätzlich können unsere Internetangebote genutzt werden, ohne personenbezogene Daten preiszugeben; diese werden nur erhoben, wenn Sie diese im Rahmen des Besuchs unserer Internetangebote freiwillig mitteilen.
                        In folgenden Fällen benötigen wir personenbezogene Daten:
                    </p>
                    <ul>
                        <li> zur Bereitstellung von angeforderten Informationen (per Email oder Post)</li>
                        <li> bei der Kontaktaufnahme mit uns</li>
                        <li>um (künftige) Komfort- und Sicherheitsfunktionen auf unserer Site anbieten zu können</li>
                    </ul>

                    <p>
                    Um dem Missbrauch unserer Internetangebote vorzubeugen, werden standardmäßig verschiedene Informationen (wie z.B. die IP-Adresse, Uhrzeit und Dauer, Betriebssystem, Browser, Seitenaufruf) gespeichert. Diese Informationen werden zu statistischen Zwecken ausgewertet, der einzelne Benutzer jedoch bleibt hierbei anonym. 
                    </p>
                    <span>
                        Anfrageformular
                    </span>

                    <p>
                        Wenn Sie uns per Anfrageformular eine Anfrage über unsere Webseite zukommen lassen, werden Ihre Angaben aus dem Anfrageformular, inklusive der von Ihnen dort angegebenen Kontaktdaten, zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <span>
                        Cookies
                    </span>
                    <p>
                        In einigen Bereichen der Web-Site setzt das CIB Cookies ein, um Ihnen unsere Leistungen individueller zur Verfügung stellen zu können. Cookies sind Kennungen, die ein Webserver an Ihren Computer senden kann, um ihn für die Dauer des Besuches zu identifizieren. Sie können Ihren Browser so einstellen, dass er Sie über die Speicherung von Cookies informiert. So wird der Gebrauch von Cookies für Sie transparent.
                    </p>
                    <span>
                        Google Analytics
                    </span>
                    <p>
                        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. <b>Google</b>. Google Analytics verwendet sog. <b>Cookies</b>, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Diese Website nutzt die Funktion “demografische Merkmale” von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden.
                        <br />
                        <br />
                        Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten <b>inkl. Ihrer IP-Adresse</b> an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: 
                    </p>
                    <Link to="http://tools.google.com/dlpage/gaoptout?hl=de" target='blank' >
                        http://tools.google.com/dlpage/gaoptout?hl=de
                    </Link>
                    <p>
                        Sie können die Erfassung durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim Besuch dieser Website verhindert:
                        Google Analytics deaktivieren Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter:
                    </p>
                    <Link to="http://www.google.com/analytics/terms/de.html bzw. unter https://www.google.de/intl/de/policies" target='blank' >
                            http://www.google.com/analytics/terms/de.html bzw. unter https://www.google.de/intl/de/policies
                    </Link>

                    <p>
                    Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code <b>gat._anonymizeIp()</b>; erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.
                    <br />
                    <br />
                    Wir nutzen Google Analytics zudem dazu, Daten aus AdWords und dem Double-Click-Cookie zu statistischen Zwecken auszuwerten. Sollten Sie dies nicht wünschen, können Sie dies über den Anzeigenvorgaben-Manager {" "}
                    <Link to="http://www.google.com/settings/ads/onweb/?hl=de" target='blank' >
                        http://www.google.com/settings/ads/onweb/?hl=de 
                    </Link>  deaktivieren.

                    <br />
                    <br />

                   <b> Quellenangabe:</b> {" "}
                    <Link to="https://www.datenschutzbeauftragter-info.de/fachbeitraege/google-analytics-datenschutzkonform-einsetzen/" target='blank' >
                    https://www.datenschutzbeauftragter-info.de/fachbeitraege/google-analytics-datenschutzkonform-einsetzen/
                    </Link> 
                    </p>
                    <span>
                        SSL-Verschlüsselung
                    </span>

                    <p>
                        Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von <b>http:// auf https://</b> wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                        Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                    <span>
                        Weitergabe von Daten an Dritte
                    </span>
                    <p>
                    Unter keinen Umständen werden personenbezogene Daten zu Werbezwecken an Dritte weiter gegeben. Die im Rahmen der elektronischen Kontaktaufnahme erhobenen personenbezogenen Daten werden ausschließlich für die Abwicklung Ihrer Abfrage verarbeitet. Eine darüber hinausgehende Nutzung Ihrer Adressdaten beschränkt sich auf die Zusendung von Informationen zu unseren Dienstleistungen (z.B. per Newsletter), wenn Sie dem ausdrücklich zugestimmt haben. Jede E-Mail bzw. jeder Newsletter beinhaltet die Option, sich aus dem Verteiler auszutragen. Sie müssen dazu lediglich den <b>Abbestellen-Link</b> anklicken.
                    Die bei der Buchung unserer Veranstaltungen erhobenen personenbezogenen Daten werden ausschließlich für die Abwicklung des Buchungsvorganges gespeichert und verarbeitet.
                    Eine Nutzung für weitere Zwecke findet nicht statt.
                    Zugriff auf personenbezogene Daten haben nur solche Personen, die über die gesetzlichen Bestimmungen zum Datenschutz informiert sind und sich gemäß den geltenden gesetzlichen Bestimmungen verpflichtet haben, diese einzuhalten. Ein Zugriff auf die Daten erfolgt jeweils nur in dem Umfang, der für die Durchführung des Vertragsverhältnisses erforderlich ist.
                    </p>
                    <span>
                        Sicherheit von Daten und Auskunftsrecht
                    </span>
                    <p>
                        Das CIB setzt technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre dem CIB zur Verfügung gestellten Daten durch zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Trotz unserer technischen und organisatorischen Maßnahmen zum Schutz Ihrer Daten kann die Kommunikation per E-Mail Sicherheitslücken aufweisen.
                        Sollten Sie Fragen zur Wahrung Ihrer informationellen Selbstbestimmung durch uns haben, wenden Sie sich bitte an unseren betrieblichen Datenschutzbeauftragten (Kontaktdaten s.u.).
                        Auf Anforderung teilen wir Ihnen schriftlich entsprechend dem geltenden Recht mit, ob und welche persönlichen Daten über Sie bei uns gespeichert sind.
                    </p>
                    <span>
                        Datenschutzbeauftragter
                    </span>
                    <p>
                        Wenn Sie Fragen hinsichtlich der Verarbeitung Ihrer persönlichen Daten haben, können Sie sich direkt an unseren Beauftragten für den Datenschutz wenden, der mit seinem Team auch im Falle von Auskunftsersuchen, Anträgen oder Beschwerden zur Verfügung steht:
                    </p>
                </div>
               
            </div>
    </div>
  )
}

export default Policy