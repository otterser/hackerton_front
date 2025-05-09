import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #111827;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 80%;
  max-width: 600px;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-bottom: 20px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

function Pages() {
  return (
    <Container>
      <Title>외상 스트레스 장애</Title>
      <TextArea placeholder="여기에 글을 작성하세요..." />
      <Button>제출</Button>
    </Container>
  );
}

export default Pages;    