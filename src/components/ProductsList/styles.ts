import styled from 'styled-components'
import { cores } from '../../styles'
export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.brancoAmarelado};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
