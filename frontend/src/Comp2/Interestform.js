import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Interestform = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: '',
    zipCode: '',
    countryCode: '',
    mobileNumber: '',
    age: '',
    profilePhoto: null,
    // termsAccepted: false,
    questions: {
      walking: false,
      running: false,
      pet: false,
      gardening: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleQuestionChange = (question) => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        [question]: !formData.questions[question]
      }
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
    
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6005/api/submit', formData);
      navigate("/users/info");
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
  const tonav = () => {
   
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Section>
        <Heading>Let's Get to Know You Better</Heading>
        <Description>
          Fill in the essentials to kickstart your journey towards finding like-minded neighbors. Your privacy is always our top priority.
        </Description>
        <Form>
          <Fieldset>
            <Legend>Personal Details</Legend>
            <InputWrapper>
              <Label>Address*</Label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Search for an address..."
                required
              />
              <Label>Zip Code*</Label>
              <Input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Country Code*</Label>
              <Select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                {/* Add more options as needed */}
              </Select>
              <Label>Mobile Number*</Label>
              <Input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Age*</Label>
              <Select name="age" value={formData.age} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46+">46+</option>
                {/* Add more options as needed */}
              </Select>
              <Label>Profile Photo</Label>
              <Input type="file" name="profilePhoto" onChange={handleChange} />
            </InputWrapper>
          </Fieldset>
          <Fieldset>
            <Legend>Preferences</Legend>
            <Question>
              <QuestionText>Do you find joy in taking leisurely walks?</QuestionText>
              <ToggleSwitch
                checked={formData.questions.walking}
                onChange={() => handleQuestionChange('walking')}
              />
              {formData.questions.walking && (
                <SubQuestion>
                  Great to hear! What's your walking tempo?
                  <Option>
                    <Radio type="radio" name="walkingTempo" value="Slow" />
                    Slow
                  </Option>
                  <Option>
                    <Radio type="radio" name="walkingTempo" value="Moderate" />
                    Moderate
                  </Option>
                  <Option>
                    <Radio type="radio" name="walkingTempo" value="Fast" />
                    Fast
                  </Option>
                </SubQuestion>
              )}
            </Question>
            <Question>
              <QuestionText>Is running your thing?</QuestionText>
              <ToggleSwitch
                checked={formData.questions.running}
                onChange={() => handleQuestionChange('running')}
              />
              {formData.questions.running && (
                <SubQuestion>
                  Awesome! What type of runner are you?
                  <Option>
                    <Radio type="radio" name="runningType" value="Sprints" />
                    Sprints
                  </Option>
                  <Option>
                    <Radio type="radio" name="runningType" value="Marathons" />
                    Marathons
                  </Option>
                  <Option>
                    <Radio type="radio" name="runningType" value="Casual Jogs" />
                    Casual Jogs
                  </Option>
                </SubQuestion>
              )}
            </Question>
            <Question>
              <QuestionText>Do you have a furry friend at home?</QuestionText>
              <ToggleSwitch
                checked={formData.questions.pet}
                onChange={() => handleQuestionChange('pet')}
              />
              {formData.questions.pet && (
                <SubQuestion>
                  That's great! Are you interested in joining your neighbors for dog walks?
                  <Option>
                    <Radio type="radio" name="dogWalks" value="Regular" />
                    Regular
                  </Option>
                  <Option>
                    <Radio type="radio" name="dogWalks" value="Weekly" />
                    Weekly
                  </Option>
                  <Option>
                    <Radio type="radio" name="dogWalks" value="Occasional" />
                    Occasional
                  </Option>
                </SubQuestion>
              )}
            </Question>
            <Question>
              <QuestionText>Does gardening bring you peace?</QuestionText>
              <ToggleSwitch
                checked={formData.questions.gardening}
                onChange={() => handleQuestionChange('gardening')}
              />
              {formData.questions.gardening && (
                <SubQuestion>
                  Great! Share your gardening experiences with us.
                </SubQuestion>
              )}
            </Question>
          </Fieldset>
          {/* <InputWrapper>
            <Checkbox
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <Label>I agree to <a href="/terms">Terms and Conditions</a></Label>
          </InputWrapper> */}
          <SubmitButton type="submit" onClick={tonav()}>Submit</SubmitButton>
        </Form>
      </Section>
    </FormContainer>
  );
};

const FormContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const QuestionText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const ToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: ${props => (props.checked ? '#00e600' : '#ccc')};
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${props => (props.checked ? '22px' : '3px')};
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
    transition: all 0.3s;
  }
`;

const SubQuestion = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
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

export default Interestform;
