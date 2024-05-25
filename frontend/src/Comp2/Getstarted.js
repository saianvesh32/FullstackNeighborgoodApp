import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {

    const handleGetStartedClick = () => {
        navigate("/users/interestform");
      };
    
      const navigate = useNavigate();
  return (
    <Section>
      <Heading>Select Your Preferred Way to Share Interests</Heading>
      <Description>
        Everyone's different, and so is the way we like to share. Choose the method that feels right for you to tell us about your interests. Whether you prefer a straightforward form or an interactive chat with our AI.
      </Description>
      <ButtonContainer>
        <Button onClick={handleGetStartedClick}>
          <i className="fas fa-clipboard-list"></i> Interests Form
        </Button>
        <Button >
          <i className="fas fa-comments"></i> A.I ChatBot
        </Button>
      </ButtonContainer>
    </Section>
  );
};

const Section = styled.section`
margin-top:150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55a00;
  }

  i {
    font-size: 1.2rem;
  }
`;

export default GetStarted;
