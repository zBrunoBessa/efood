import Restaurant from '../../models/Restaurant'
import ProductProfile from '../ProductProfile'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductListProfile = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((Restaurant) => (
          <ProductProfile
            key={Restaurant.id}
            description={Restaurant.description}
            image={Restaurant.image}
            infos={Restaurant.infos}
            title={Restaurant.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListProfile
