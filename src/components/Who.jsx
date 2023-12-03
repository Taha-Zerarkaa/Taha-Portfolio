import styled from "styled-components";
import React from 'react'
import { SiSolidity,SiChainlink,SiOpenzeppelin,SiBlockchaindotcom } from "react-icons/si";
import {FaEthereum,FaBitcoin,FaHardHat } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiDownload } from "react-icons/bi";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`
const Container = styled.div`
   height: 100%;
   scroll-snap-align: center;
   width: 1400px;
   display: flex;
   justify-content: space-between;

`

const Left = styled.div`
   flex: 1;
   @media only screen and (max-width: 768px) {
    display: none;
  }
   `
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`

const Img = styled.img`
   width: 800px;
   height: 600px;
   object-fit: contain;
   position: none;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   margin: auto;
   animation: animate 2s infinite ease alternate;
   @keyframes animate {
    to{
      transform: translatey(50px);
    }
  }
`

const Right = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
   @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

`


const WhatWeDo = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`

const Icons = styled.div`
  font-size: 3em;
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 2em; /* Adjust the font size for smaller screens */
    flex-wrap: wrap; /* Allow icons to wrap to the next line on smaller screens */
    justify-content: center; /* Center icons horizontally */
  }
`
const Line = styled.img`
    height: 5px;
`
const Subtitle = styled.h2`
   color: #777cc4;
`
const Desc = styled.p`
   font-size: 24px;
   color: lightgray;
 
`
const Button = styled.button`
   background-color: #424685;
   color: white;
   font-weight: 500;
   width: 100px;
   padding: 10px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
`






const Who = () => {
  const openPdf = () => {
    // Assuming your PDF is in the "public" folder
    const pdfUrl = 'https://rose-lea-5.tiiny.site';
    
    // Open the PDF in a new tab/window
    window.open(pdfUrl, '_blank');
  };
  


  return (
    <Section>
      <Container>
         <Left>
         <Img src="./img/moon.png" />
         </Left>
         <Right>
            <Title>Think outside the square space</Title>
            <WhatWeDo>
             <Line src="./img/line.png" />
             <Subtitle>My strengths lie in...</Subtitle>
            </WhatWeDo>

            <Icons>
            <SiSolidity />
            <SiChainlink />
            <FaEthereum />
            <SiOpenzeppelin />
            <FaBitcoin />
            <IoLogoJavascript />
            <FaHardHat />
            <SiBlockchaindotcom />
            </Icons>
            <Desc>
            Driven by a deep passion for blockchain technology, I channel my enthusiasm into crafting a diverse array 
            of projects, each intricately tied to the fascinating realm of decentralized systems.
            </Desc>
            <Button onClick={openPdf}> Resume  </Button>

           </Right>

      </Container>
    </Section>
  )
}

export default Who
