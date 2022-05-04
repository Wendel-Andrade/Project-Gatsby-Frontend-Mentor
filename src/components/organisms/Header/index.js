import React, { useState } from "react";
import NavMain from "../../molecules/NavMain";
import { 
  HeaderSection,
   Logo,
    NavButtonMenu,
     Separator } from './styles'

const Header = () => {

  const [isopen, setIsopen] = useState(false);
  const [isactive, setIsactive] = useState(false);
  
  const handleClickButtonMenu = event => {
    event.preventDefault()    
      if(isopen) {
        setIsopen(false) 
        setIsactive(false)
      } else {
        setIsopen(true) 
        setIsactive(true)
      }
    }
  return (
    <HeaderSection>
      <Logo />
      <Separator />
      <NavMain isActive={isactive}/> 
      <NavButtonMenu isOpen={isopen} onClick={handleClickButtonMenu}/> 
    </HeaderSection>
  )
}

export default Header;