import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-size: cover;
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  align-items: center;
  a {
    color: ${cores.laranja};
    text-decoration: none;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  img {
    width: 125px;
    height: 57.5px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
