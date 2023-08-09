import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  color: ${cores.branca};
  font-size: 32px;
  position: relative;

  .container {
    position: relative;
    padding-top: 214px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  p {
    position: absolute;
    top: 25px;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
  font-weight: bold;
`
