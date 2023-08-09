import { Link } from 'react-router-dom'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, Botao } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const ProductProfile = ({ title, description, infos, image }: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>
      <Link to="/categories">Adicionar ao carrinho</Link>
    </Botao>
  </Card>
)
export default ProductProfile
