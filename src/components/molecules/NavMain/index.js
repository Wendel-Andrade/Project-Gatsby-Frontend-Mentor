import React from "react"

import { 
  NavWrap, 
  ListItems,
   Item,
    Action,
     SpanNumber } from './styles'

const NavMain = ( { isActive } ) => {
  return (
    <NavWrap className={isActive ? "-isActive" : ""}>
        <ListItems>
          <Item>
            <Action to='/' activeClassName="-active">
              <SpanNumber>00</SpanNumber>Home
            </Action>
          </Item>
          <Item>
            <Action to='/destination' activeClassName="-active">
            <SpanNumber>01</SpanNumber>Destination
            </Action>
          </Item>
          <Item>
            <Action to='/crew' activeClassName="-active">
            <SpanNumber>02</SpanNumber>Crew
            </Action>
          </Item>
          <Item>
            <Action to='/tech' activeClassName="-active">
            <SpanNumber>03</SpanNumber>Technology
            </Action>
          </Item>
        </ListItems>
    </NavWrap>
  )
}

export default NavMain