import React from 'react'
import styled, { css } from 'styled-components'

export const TitleStyles = css`
  width: 100;
  font-family: ${props => props.theme.fonts.family.heading};
  font-size: ${props => props.theme.fonts.size.heading1xs};
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary.main};
  text-align: center;
`

const Text = styled.h1`
  ${TitleStyles}
  margin: 0;
  padding: 0;
`

const Title = ( { className, children } ) => {
  return (
    <Text className={className}>
      {children}
    </Text>
  )
}

export default Title