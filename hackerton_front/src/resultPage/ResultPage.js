import React from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';

const Container = styled.div`
  padding: 20px;
`;

const ResultPage = () => {
  // 임시 데이터 (실제로는 API나 상태 관리에서 가져와야 함)
  const results = [
    { grade: 'B', category: '영역1' },
    { grade: 'B', category: '영역2' },
    { grade: 'C', category: '영역3' },
    { grade: 'C', category: '영역4' }
  ];

  return (
    <Container>
      <h1>결과 페이지</h1>
      <ResultCard results={results} />
    </Container>
  );
};

export default ResultPage; 