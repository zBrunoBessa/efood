import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-size: cover;
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  img {
    width: 125px;
    height: 57.5px;
  }
`
export const Titulo = styled.h2`
  display: block;
  text-align: center;
  margin-top: 138px;
  margin-bottom: 40px;
  color: ${cores.laranja};
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
