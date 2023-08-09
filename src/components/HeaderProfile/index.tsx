import { Link } from 'react-router-dom'
import { HeaderBar, Image, LinkCart, LinkItem, Links } from './styles'
import bannerImg from '../../assets/images/banner.svg'
import logo from '../../assets/images/logo.svg'

export const HeaderProfile = () => (
  <>
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderBar>
        <div>
          <Links>
            <LinkItem>
              <Link to="/">Restaurantes</Link>
            </LinkItem>
          </Links>
        </div>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
      </HeaderBar>
    </Image>
  </>
)
