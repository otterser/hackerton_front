import React from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import HealthMap from './HealthMap';

const Container = styled.div`
  padding: 20px;
`;

const ResultPage = () => {
  const results = [
    { grade: 'B', category: '신체 건강' },
    { grade: 'B', category: '정신 건강' },
    { grade: 'C', category: '영양 상태' },
    { grade: 'C', category: '수면 상태' },
    { grade: 'A', category: '스트레스' },
    { grade: 'B', category: '운동 상태' }
  ];

  return (
    <Container>
      <h1>검사 결과</h1>
      <HealthMap results={results} />
      <ResultCard results={results} />
    </Container>
  );
};

export default ResultPage; 