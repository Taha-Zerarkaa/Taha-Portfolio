import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle}from 'react-icons/ai'
import { SiWeb3Dotjs, SiSmartthings} from "react-icons/si";




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

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm(
        "service_9snot1c",
        "template_8lbmwrq",
        ref.current,
        "ooxePrJBX0bwt9eR0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };


  return (
    <Section>
      <Container>
      <Left>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" name="email" />
          <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
              />
              <Button type="submit">Send</Button>
              {success &&
              "Your message has been sent. We'll get back to you soon :)"}
              <Social>
              <AiFillFacebook onClick={handleFacebookClick} style={{ fontSize: 50 }}/>
              <AiFillGithub onClick={handlegithubClick} style={{ fontSize: 50 }}/>
              <AiFillTwitterCircle onClick={handletwitterClick} style={{ fontSize: 50 }}/>
              <AiFillLinkedin onClick={handlelinkedinClick} style={{ fontSize: 50 }}/>
              <SiWeb3Dotjs style={{ width: '100px', }}/>
              <SiSmartthings style={{ width: '100px', }}/>
            

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
