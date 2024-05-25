import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";

const Info = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch the current user's data
  const getCurrentUser = async () => {
    try {
      const response = await fetch("http://localhost:6005/login/success", {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.user);
        console.log(data.user);
      } else {
        console.log("Failed to fetch user data");
      }
    } catch (error) {
      console.log("Error fetching current user data:", error);
    }
  };

  // Fetch all users' data
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:6005/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter out the current user from the list of users
  const otherUsers = users.filter(user => user.displayName !== currentUser?.displayName);

  return (
    <Container>
      <h1>User Information</h1>
      <CardContainer>
        {otherUsers.map((user, index) => (
          <Card key={index}>
            <CardContent>
              <StyledProfileIcon size="50px" />
              <InfoItem><strong>Address:</strong> {user.address}</InfoItem>
              <InfoItem><strong>Zip Code:</strong> {user.zipCode}</InfoItem>
              <InfoItem><strong>Country Code:</strong> {user.countryCode}</InfoItem>
              <InfoItem><strong>Mobile Number:</strong> {user.mobileNumber}</InfoItem>
              <InfoItem><strong>Age:</strong> {user.age}</InfoItem>
              {user.profilePhoto && <ProfileImage src={user.profilePhoto} alt="Profile" />}
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Info;

// Styled Components

const Container = styled.div`
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const InfoItem = styled.p`
  margin: 5px 0;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
  margin-top: 10px;
`;

const StyledProfileIcon = styled(CgProfile)`
  font-size: 250px;
  color: #333;
  margin-bottom: 10px;
`;
