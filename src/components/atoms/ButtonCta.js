import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const ButtonLink = styled(Link)`
  width: 15rem;
  height: 15rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  font-family: ${props => props.theme.fonts.family.heading};
  font-size:  ${props => props.theme.fonts.size.ctaxs};
  font-weight: normal;
  letter-spacing:  ${props => props.theme.fonts.charspace.ctaxs};
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.background.main};
  border-radius: 50%;
  background-color: white;
  &:after { 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    z-index: -1;
    background-color: ${props => props.theme.colors.secondary.main};
    opacity: 0.1;
    transform: scale(1);
    transition: transform .3s ease-in-out;
  }
  &:hover:after {
    transform: scale(1.6423);
    transition: transform .3s ease-in-out;
  }
`

const ButtonCta = ( { label, target, className } ) => {
  return (
    <ButtonLink to={target} className={className}>
      {label}
    </ButtonLink>
  )
}

export default ButtonCta