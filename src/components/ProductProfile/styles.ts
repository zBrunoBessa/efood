import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  position: relative;
  margin-bottom: 48px;
  width: 320px;
  color: ${cores.brancoAmarelado};
  img {
    margin: 8px;
    width: 95%;
  }
`
export const Titulo = styled.h3`
  margin-top: -8px;
  margin-left: 8px;
  font-weight: bold;
  font-size: 16px;
  display: block;
`
export const Descricao = styled.p`
  padding-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 12px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.button`
  background-color: ${cores.laranjaClaro};
  border: none;
  margin: 8px;
  width: 304px;
  height: 24px;
  a {
    text-decoration: none;
    color: ${cores.laranja};
    font-weight: bold;
  }
`
