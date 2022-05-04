import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`
const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  cursor: pointer;
  flex: auto 1 auto;
`

export const BarButton = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
  transition: 0.3s;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &.-open1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
  }
  &.-open2 {
   opacity: 0;
  }
  &.-open3 {
    -webkit-transform: rotate(45deg) translate(-6px, -5px);
    transform: rotate(45deg) translate(-6px, -5px);
  }
`

const ButtonMenu = ( { onClick, isOpen=false, className } ) => {
  return (
    <Container onClick={onClick} className={className}>
      <WrapButton>
        <BarButton className={`${isOpen ? "-open1" : ""}`}/>
        <BarButton className={`${isOpen ? "-open2" : ""}`}/>
        <BarButton className={`${isOpen ? "-open3" : ""}`}/>
      </WrapButton>
    </Container>
  )
}

export default ButtonMenu

