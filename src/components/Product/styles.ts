import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  margin-bottom: 48px;
  max-width: 100%;
`
export const Borda = styled.div`
  border: 1px solid ${cores.laranja};
  margin-top: -5px;
`
export const Titulo = styled.h3`
  margin: 8px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-right: 8px;
    }
  }
`
export const Descricao = styled.p`
  margin: 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.button`
  background-color: ${cores.laranja};
  border: none;
  color: ${cores.branca};
  margin: 8px;
  padding: 4px 6px;
  a {
    font-size: 14px;
    text-decoration: none;
    color: ${cores.branca};
  }
`
