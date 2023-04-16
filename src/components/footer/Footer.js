import React from 'react'
import "../../styles/footer.css"
import { ReactComponent as GithubLogo} from "../../assets/icons/github.svg"
import { ReactComponent as LinkedInLogo} from "../../assets/icons/linkedin.svg"
import { ReactComponent as InstaLogo} from "../../assets/icons/insta.svg"
import { ReactComponent as SubmitArrow} from "../../assets/icons/submit-arrow.svg"

const Footer = () => {
  return (
    <footer>
      <article className='footer-desktop'>
        <section className='footer-info'>
                <div>
                    <h2>Kontakt Mig</h2>
                    <p>Kan du lide hvad du ser? Jeg er altid klar til en god snak over en kop kaffe, eller en korrespondance via e-mail.</p>
                </div>
                <div className="socials">
                    <a rel="stylesheet" href="https://github.com/fredeskrubba" target="_blank">
                        <GithubLogo/>
                    </a>
                    <a rel="stylesheet" href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" target="_blank">
                        <LinkedInLogo/>
                    </a>
                    <a rel="stylesheet" href="https://www.instagram.com/" target="_blank">
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
                <SubmitArrow/>
            </div>
          </form> 
      </article>
      <article className='footer-mobile'>
          <div className='footer-header'>
            <h2>Kontakt Mig</h2>
            <p>Kan du lide hvad du ser? Jeg er altid klar til en god snak over en kop kaffe, eller en korrespondance via e-mail.</p>
          </div>
          <section className="form-grid">
            <form>
              <input type="text" placeholder='Navn...'/>
              <input type="text" placeholder='E-mail...'/>
              <div className="socials">
                      <a rel="stylesheet" href="https://github.com/fredeskrubba" target="_blank">
                          <GithubLogo/>
                      </a>
                      <a rel="stylesheet" href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" target="_blank">
                          <LinkedInLogo/>
                      </a>
                      <a rel="stylesheet" href="https://www.instagram.com" target="_blank">
                          <InstaLogo/>
                      </a>
                  </div>
            </form>
            <article>
              <textarea placeholder='Besked...' className='text-box-mobile'/>
              <div className="submit-field">
                  <p>Kontakt mig</p>
                  <SubmitArrow/>
              </div>
            </article>
          </section>
      </article>
      
    </footer>
  )
}

export default Footer