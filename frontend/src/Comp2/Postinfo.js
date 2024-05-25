import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CgProfile as CgProfileIcon } from "react-icons/cg";

const Postinfo = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from the server
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:6005/api/posts');
        setPosts(response.data);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostContainer>
      {posts.map((post) => ( 
        <PostCard key={post._id}>
          <CgProfile />
          <RecipientName>{post.recipientName}</RecipientName>
          <RecipientAddress>{post.recipientAddress}</RecipientAddress>
          <Message>{post.message}</Message>
          {post.image && <Image src={`http://localhost:6005/${post.image}`} alt="Postcard Image" />}
        </PostCard>
      ))}
    </PostContainer>
  );
};

// Styled Components

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const PostCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
`;

const RecipientName = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const RecipientAddress = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 1rem;
`;

const CgProfile = styled(CgProfileIcon)`
  font-size: 3rem;
  color: #ff6600;
  margin-bottom: 0.5rem;
`;

export default Postinfo;
