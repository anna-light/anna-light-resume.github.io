import styled from 'styled-components'
import { Box } from 'rebass'
import bg from './blu_header_bg@2x.png';

export const HeaderWrapper = styled(Box)`
  text-align: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`