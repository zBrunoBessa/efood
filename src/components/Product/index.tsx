import { Link } from 'react-router-dom'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import { Card, Descricao, Titulo, Infos, Botao, Borda } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  score: number
}

const Product = ({ title, description, infos, image, score }: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Borda>
      <Titulo>
        {title}
        <ul>
          <li>{score}</li>
          <li>
            <img src={estrela} />
          </li>
        </ul>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Botao>
        <Link to="/categories">Saiba mais</Link>
      </Botao>
    </Borda>
  </Card>
)
export default Product
