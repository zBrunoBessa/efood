class Restaurants {
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  score: number
  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    score: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.score = score
  }
}

export default Restaurants
