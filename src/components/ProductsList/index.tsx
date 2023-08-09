import Restaurant from '../../models/Restaurant'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Product
            key={restaurant.id}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            title={restaurant.title}
            score={restaurant.score}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
