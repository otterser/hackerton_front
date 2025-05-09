import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const HealthItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background: ${props => {
    switch(props.grade) {
      case 'A': return '#e8f5e9';
      case 'B': return '#fff3e0';
      case 'C': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  border-radius: 8px;
  border-left: 4px solid ${props => {
    switch(props.grade) {
      case 'A': return '#4caf50';
      case 'B': return '#ff9800';
      case 'C': return '#f44336';
      default: return '#9e9e9e';
    }
  }};
`;

const Category = styled.span`
  font-weight: 500;
  color: #333;
`;

const Grade = styled.span`
  font-weight: bold;
  color: ${props => {
    switch(props.grade) {
      case 'A': return '#4caf50';
      case 'B': return '#ff9800';
      case 'C': return '#f44336';
      default: return '#9e9e9e';
    }
  }};
`;

const HealthMap = ({ results = [] }) => {
  const categories = [
    '신체 건강',
    '정신 건강',
    '영양 상태',
    '수면 상태',
    '스트레스',
    '운동 상태'
  ];

  return (
    <Container>
      <Title>건강 상태</Title>
      {categories.map((category, index) => {
        const result = results[index] || { grade: 'N/A' };
        return (
          <HealthItem key={category} grade={result.grade}>
            <Category>{category}</Category>
            <Grade grade={result.grade}>{result.grade}</Grade>
          </HealthItem>
        );
      })}
    </Container>
  );
};

export default HealthMap;