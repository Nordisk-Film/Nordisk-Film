import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footerWrapper">
      {/* Footer GridContainer */}
      <div className='footerGridContainer'>
        {/* 1. */}
        <ul>
          <li>
            <h3>NORDISK FILM</h3>
          </li>
          <li>
            <p>Øster Uttrupvej 1</p>
          </li>
          <li>
            <p>9000 Aalborg</p>
          </li>
        </ul>
        {/* 2. */}
        <ul>
          <li>
            <p>CVR: 12345678</p>
          </li>
          <li>
            <p>MAIL: info@wallywood.dk</p>
          </li>
          <li>
            <p>MOBIL: +45 9812 3456</p>
          </li>
        </ul>
        {/* 3.(tom) */}
        <div></div>
        {/* 4. */}
        <div className='socialMedia'>
          <a href="pinterest.com"><img src="src/assets/images/Pinterest.svg" alt="Pinterest" /></a>
          <a href="instagram.com"><img src="src/assets/images/Instagram.svg" alt="Instagram" /></a>
          <a href="facebook.com"><img src="src/assets/images/Facebook.svg" alt="Facebook" /></a>
          <a href="x.com"><img src="src/assets/images/Twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  )
}