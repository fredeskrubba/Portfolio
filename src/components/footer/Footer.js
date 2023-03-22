import React from 'react'
import "../../styles/footer.css"
import { ReactComponent as GithubLogo} from "../../assets/img/github.svg"
import { ReactComponent as LinkedInLogo} from "../../assets/img/linkedin.svg"
import { ReactComponent as InstaLogo} from "../../assets/img/insta.svg"
import { ReactComponent as SubmitArrow} from "../../assets/img/submit-arrow.svg"

const Footer = () => {
  return (
    <footer>
      <section className='footer-info'>
            <h2>Kontakt Mig</h2>
            <p>Kan du lide hvad du ser? Jeg er altid klar til en god snak over en kop kaffe, eller en korrespondance via e-mail.</p>
            <div className="socials">
                <a rel="stylesheet" href="https://github.com/fredeskrubba" target="_blank">
                    <GithubLogo/>
                </a>
                <a rel="stylesheet" href="https://github.com/fredeskrubba" target="_blank">
                    <LinkedInLogo/>
                </a>
                <a rel="stylesheet" href="https://github.com/fredeskrubba" target="_blank">
                    <InstaLogo/>
                </a>
            </div>
      </section>
      <form>
        <input type="text" placeholder='Navn...'/>
        <input type="text" placeholder='E-mail...'/>
        <textarea cols="20" rows="10" placeholder='Besked...'/>
        <div className="submit-field">
            <p>Kontakt mig</p>
        </div>
      </form> 
    </footer>
  )
}

export default Footer