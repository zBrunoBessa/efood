import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  display: inline-block;
  margin-right: 8px;
`
