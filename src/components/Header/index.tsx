import { Link } from 'react-router-dom'
import { HeaderBar, Image, Titulo } from './styles'
import bannerImg from '../../assets/images/banner.svg'
import logo from '../../assets/images/logo.svg'

export const Header = () => (
  <>
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderBar>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </HeaderBar>
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </Image>
  </>
)
