import './Footer.scss'

export const Footer = () =>{
    return(
        <>
        <div className="footerWrapper">
        <footer>
        <div>
            <h4>Om hjemmesiden</h4>
            <br />
            <p>Dette digitale læringssite er udviklet af UNDP's nordiske kontor i Danmark,  </p>
            <br />
            <p>Vores mål med dette site er at give lærere og elever på landets ungdomsuddannelser mulighed for at opnå viden, holdninger og handlingskompetence i forhold til FN's verdensmål for bæredygtig udvikling. Sitet opdateres løbende med nyeste statistik, viden og nye undervisningsforløb.</p>
            <br />
            <p>Oplysningsbevilling.</p>
            <br />
            <h4>SEKUNDER TIL DET NYE ÅR KOMMER HER</h4>
          </div>
          <div id="right">
            <h4>Organisationerne bag</h4>
            <br />
            <img alt="UNDP" />
            <img alt="Verdensklasse" />  
            <br />
            <h4>Udviklet med støtte fra Danidas oplysningsbevilling</h4>            
          </div>
          </footer>
          </div>
          </>
    )
}

