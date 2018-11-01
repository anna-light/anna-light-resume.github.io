import styled from 'styled-components'
import { Text } from 'rebass'

export const Link = styled(Text)`
  color: ${({ theme }) => theme.colors.linkColorBlue};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`