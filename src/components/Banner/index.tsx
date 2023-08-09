import { Image, Titulo } from './styles'

import bannerImg from '../../assets/images/dolcefullhd.png'

const Banner = () => (
  <Image
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <div className="container">
      <p>Italiana</p>
      <div>
        <Titulo> La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Image>
)

export default Banner
