import styled from 'styled-components'
import { cores } from '../../styles'
import { Card } from '../Product/styles'
export const Container = styled.section`
  padding: 32px 0;
  margin-bottom: 98px;
  background-color: ${cores.brancoAmarelado};
  ${Card} {
    background-color: ${cores.laranja};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  margin-top: 32px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
