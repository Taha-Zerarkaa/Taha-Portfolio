import React from "react";
import styled from "styled-components";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle}from 'react-icons/ai'




const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center ;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
 `

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`



const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`
const Button = styled.button`
  background-color: #8387c5;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Social = styled.div`
 padding: 20px;
  font-size: 3em;
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 2em; /* Adjust the font size for smaller screens */
    flex-wrap: wrap; /* Allow icons to wrap to the next line on smaller screens */
    justify-content: center; /* Center icons horizontally */
  }
`


const Right = styled.div`
  flex: -1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`



const Link = styled.button`
  background-color: #8387c5;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const handleFacebookClick = () => {
  // Redirect to the Facebook website
  window.location.href = 'https://www.facebook.com/Taha.Clipper';
};

const handletwitterClick = () => {
  
  window.location.href = 'https://twitter.com/taha_zerarka';
};

const handlegithubClick = () => {
  
  window.location.href = 'https://github.com/Taha-Zerarkaa';
};

const handlelinkedinClick = () => {
  
  window.location.href = 'https://www.linkedin.com/in/taha-zerarka-869574233/';
};




const Contact = () => {
  return (
    <Section>
      <Container>
      <Left>
        <Form>
          <Title>Contact Us</Title>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" name="email" />
          <TextArea
              placeholder="Write your message"/>
              <Button type="submit">Send</Button>
              <Social>
              <AiFillFacebook onClick={handleFacebookClick} style={{ fontSize: 50 }}/>
              <AiFillGithub onClick={handlegithubClick} style={{ fontSize: 50 }}/>
              <AiFillTwitterCircle onClick={handletwitterClick} style={{ fontSize: 50 }}/>
              <AiFillLinkedin onClick={handlelinkedinClick} style={{ fontSize: 50 }}/>
              </Social>
        </Form>
      </Left>
      <Right>
        
          <Form>
            
          </Form>
        
    
      </Right>
      </Container>
    </Section> 
  )
}

export default Contact
