import styled from "styled-components";
import { Link } from "gatsby"
import media from "../../../foundation/breakPoints"


const SpanNumber = styled.span`
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  margin-right: 1.4rem;
`

const NavWrap = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 25.4rem;
  height: 100vh;

  transform: translateX(110%);
  transition: transform .3s ease-in-out;

    &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(255,255,255,0.1);

    filter: blur(40px);
    backdrop-filter: blur(-40px);
  }

  &.-isActive {
    transform: translateX(0);
    transition: transform .3s ease-in-out;
  }

  ${media.greaterThan("md")`
    width: 45rem;
    height: 9.6rem;
    transform: translateX(0);
    margin: 0;
    padding: 0;    
  `}
  ${media.greaterThan("xl")`
  position: relative;
  width: 83rem;
  padding: 0 12.3rem 0 7.5rem;
 `}
`

const ListItems = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  list-style: none;
  margin: 11.8rem 0 0;

  ${media.greaterThan("md")`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;    
  `}
`

const Item = styled.li`
  position: relative;
  display: block;
  margin: 0 0 0 3.2rem;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 2.2rem;
  }

 ${media.greaterThan("md")`
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 0;
    }  
  `}
`

const Action = styled(Link)`
  display: block;
  width: 100%;
  font-family: ${props => props.theme.fonts.family.subheading};
  font-size: ${props => props.theme.fonts.size.navlink1};
  font-weight: normal;
  letter-spacing: ${props => props.theme.fonts.charspace.navlink};
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary.main};
  text-align: left;
  text-decoration: none;
  padding: 0.5rem 0;

  &.-active {
    border-right: 4px solid ${props => props.theme.colors.secondary.main};
  }

  ${media.greaterThan("md")`
  font-size: ${props => props.theme.fonts.size.navlink2};
  line-height: 9rem; 
  text-align: center;
  padding: 0;
  border-bottom: 3px solid transparent;
  &:hover {
    border-right: none;
    border-bottom: 3px solid ${props => props.theme.colors.secondary.dark};
  }
  &.-active {
    border-right: none;
    border-bottom: 3px solid ${props => props.theme.colors.secondary.main};
  }

  ${SpanNumber} {
    display: none;
  }
`}

  ${media.greaterThan("xl")`
    display: flex;
    font-size: ${props => props.theme.fonts.size.navelink1};
    ${SpanNumber} {
      display: block;
      margin: 0 1.1rem 0 0;
    }
  `}
`

export {
  NavWrap,
  ListItems,
  Item,
  Action,
  SpanNumber
}