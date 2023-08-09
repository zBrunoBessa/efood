import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

import imgInstagram from '../../assets/images/instagram.svg'
import imgTwitter from '../../assets/images/twitter.svg'
import imgFacebook from '../../assets/images/facebook.svg'
import imgLogo from '../../assets/images/logo.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>
          <img src={imgLogo} />
        </SectionTitle>
        <Links>
          <li>
            <Link>
              <img src={imgInstagram} />
            </Link>
          </li>
          <li>
            <Link>
              <img src={imgFacebook} />
            </Link>
          </li>
          <li>
            <Link>
              <img src={imgTwitter} />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)
export default Footer
