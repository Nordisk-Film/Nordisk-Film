import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footerWrapper">
      {/* Footer GridContainer */}
      <div className='footerGridContainer'>
        {/* 1. */}
        <div>
          <h3>Om NF Plakater</h3>
          <ul>
            <li><a href="#">Spørgsmål og svar</a></li>
            <li><a href="#">Om Nordisk Film Biografer</a></li>
            <li><a href="#">Om Nordisk Film</a></li>
            <li><a href="#">Biografoverblik</a></li>
            <li><a href="#">Partnerbiografer</a></li>
            <li><a href="#">Job i NFBIO</a></li>
            <li><a href="#">Betalingsbetingelser</a></li>
            <li><a href="#">Privatlivs- og cookiepolitik</a></li>
            <li><a href="#">Dansk biograf- og underholdningspanel</a></li>
            <li><a href="#">Opdatér samtykke for cookies</a></li>
          </ul>
        </div>
        {/* 2. */}
        <div>

        </div>
        {/* 3 */}
        <div>
          <h3>Business</h3>
          <ul>
            <li><a href="#">Gavebilletter</a></li>
            <li><a href="#">Konferencer og møder</a></li>
            <li><a href="#">Særforestillinger</a></li>
            <li><a href="#">Biografreklame</a></li>
          </ul>
        </div>
        {/* 4. */}
        <div className='socialMedia'>
          <a href="pinterest.com"><img src="src/assets/images/PinterestBlue.svg" alt="Pinterest" /></a>
          <a href="instagram.com"><img src="src/assets/images/instagramBlue.svg" alt="Instagram" /></a>
          <a href="facebook.com"><img src="src/assets/images/facebookBlue.svg" alt="Facebook" /></a>
          <a href="x.com"><img src="src/assets/images/twitterBlue.svg" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  )
}