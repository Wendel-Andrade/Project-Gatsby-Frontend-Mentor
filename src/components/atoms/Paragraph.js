import React from 'react'
import styled, { css } from 'styled-components'

export const ParagraphStyles = css`
  width: 100;
  font-family: ${props => props.theme.fonts.family.body};
  font-size: ${props => props.theme.fonts.size.bodyxs};
  font-weight: normal;
  color: ${props => props.theme.colors.primary.main};
  line-height: 1.67;
  text-align: center;
`

const Text = styled.p`
  ${ParagraphStyles}
  margin: 0;
  padding: 0;
`

const Paragraph = ( { className, children } ) => {
  return (
    <Text className={className}>
      {children}
    </Text>
  )
}

export default Paragraph