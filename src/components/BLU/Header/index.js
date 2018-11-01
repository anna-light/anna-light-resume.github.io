import React from 'react';
import { HeaderWrapper } from './elements'
import { Heading, Text } from 'rebass'
import Link from '../../Link'

export default props => {
  return (
    <HeaderWrapper pt={4} pb={6}>
      <Link>{'< '}Back to main page</Link>
      <Heading fontSize={6} pt={5}>Web platform for managing <br/> AR ad campaigns</Heading>
      <Text fontSize={3} pt={4}>3D-editor for creating AR experiences. Mobile apps for AR playback.</Text>
    </HeaderWrapper>
  )
}