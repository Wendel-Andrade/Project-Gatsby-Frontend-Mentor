import React from 'react'
import styled, { css } from 'styled-components'

export const SubTitleStyles = css`
  width: 100;
  font-family: ${props => props.theme.fonts.family.subheading};
  font-size: ${props => props.theme.fonts.size.subheading1xs};
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.fonts.charspace.subheadingxs};
  color: ${props => props.theme.colors.primary.main};
  text-align: center;
`

const Text = styled.h2`
  ${SubTitleStyles}
  margin: 0;
  padding: 0;
`

const SubTitle = ( { className, children } ) => {
  return (
    <Text className={className}>
      {children}
    </Text>
  )
}

export default SubTitle