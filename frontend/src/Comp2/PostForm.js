import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const navigate = useNavigate();
  const [formData1, setFormData1] = useState({
    recipientName: '',
    recipientAddress: '',
    message: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData1({
      ...formData1,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the server
      console.log(formData1);
      const response = await axios.post('http://localhost:6005/api/send-postcard', formData1);
      // Handle successful submission
      console.log('Postcard sent successfully:', response.data);
      navigate('/users/postinfo');
      // Navigate to a success page or do something else
    } catch (error) {
      console.error('Error sending postcard:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Section>
        <Heading>Send Your Neighbors a Personalized Card</Heading>
        <Description>
          Fill in the essentials to deliver a Personalized Postcard.
        </Description>
        <Fieldset>
          <Legend>Recipient Details</Legend>
          <InputWrapper>
            <Label>Recipient's Name*</Label>
            <Input
              type="text"
              name="recipientName"
              value={formData1.recipientName}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Recipient's Address*</Label>
            <Input
              type="text"
              name="recipientAddress"
              value={formData1.recipientAddress}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Message*</Label>
            <Textarea
              name="message"
              value={formData1.message}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Upload Image</Label>
            <Input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </InputWrapper>
          <SubmitButton type="submit">Send Postcard</SubmitButton>
        </Fieldset>
      </Section>
    </FormContainer>
  );
};

// Styled Components

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Section = styled.section`
  max-width: 800px;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #ff6600;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 2rem;
`;

const Fieldset = styled.fieldset`
  border: 1px solid #ff6600;
  border-radius: 8px;
  padding: 1rem;
`;

const Legend = styled.legend`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff6600;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e55a00;
  }
`;

export default PostForm;
