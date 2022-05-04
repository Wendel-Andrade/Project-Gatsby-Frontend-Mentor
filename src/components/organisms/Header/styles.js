import styled from "styled-components";
import Brand from "../../atoms/Brand";
import ButtonMenu, { BarButton } from "../../atoms/ButtonMenu";
import media from "../../../foundation/breakPoints"

const NavButtonMenu = styled(ButtonMenu)`
    ${BarButton} {
      width: 2.4rem;
      height: 0.3rem;
      background-color: ${props => props.theme.colors.primary.main};
    }
`
const Separator = styled.div`
  display: none;
  flex-shrink: 100;
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.secondary.main};
  opacity: 0.25;
  margin-left: 2.4rem;
  transform: translateX(3rem);
  z-index: 1;
`

const Logo = styled(Brand)`
  width: 4rem;
  height: 4rem;
`

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8.8rem;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2.4rem;
  z-index: 10;

  
  ${media.greaterThan("md")`
    height: 9.5rem;
    padding: 0 4.8rem 0 3.9rem;
    ${NavButtonMenu} {
      display: none;
    }
    ${Logo} {
      width: 4.8rem;
      height: 4.8rem;
    }
  `}
  ${media.greaterThan("xl")`
    margin-top: 4rem;
    padding: 0 0 0 5.5rem;
    ${Separator} {
      display: block;
    }
  `}
`

export {
  HeaderSection,
  Logo,
  NavButtonMenu,
  Separator
}