import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';



const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
`;



const Button = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  width: 200px;

  &:hover {
    background-color: #2563eb;
  }
`;

function App() {
  return (
    <Container>
      <h1>검사시작!!</h1>
      <Button>외상 스트레스 장애</Button>
      <Button>우울증세</Button>
      <Button>불안증세</Button>
    </Container>
  );
}

export default App;