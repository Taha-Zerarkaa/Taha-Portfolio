import React from 'react'
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Logo = styled.img`
  height: 100px;
`

const List = styled.ul`
  display: flex;
  gap:50px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const ListItem = styled.li`
  cursor: pointer;
`


const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`


const Button = styled.button`
   width: 200px;
   padding: 15px;
   background-color: #424685;
   color: #ffffff;
   border: none;
   border-radius: 5px;
   cursor: pointer;
`


const Icons = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`
 
const newtab =url=>{
  window.open(url)
}


const Navbar = () => {
  return (
    <Section>
        <Container>
        <Links>
        <Logo src="./img/moon.png"/>
        
            
        
        </Links>
        <Icons>
            
            <Button onClick={()=>newtab('https://mail.google.com ')}><h3>Contact Me</h3></Button>
        </Icons>
       </Container> 
    </Section>
  )
}

export default Navbar
