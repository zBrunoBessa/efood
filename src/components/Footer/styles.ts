import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.laranjaClaro};
  padding: 40px 0;
  font-size: 14px;
  p {
    font-size: 10px;
    display: block;
    text-align: center;
    color: ${cores.laranja};
  }
`
export const SectionTitle = styled.h4`
  color: ${cores.laranja};
  font-size: 16px;
  font-weight: bold;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  font-size: 14px;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
`
export const Link = styled.a`
  color: ${cores.laranja};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  display: flex;
  margin-bottom: 64px;
  justify-content: center;
  flex-wrap: wrap;
`
