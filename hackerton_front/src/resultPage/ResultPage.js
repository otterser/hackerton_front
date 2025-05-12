import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HealthMap from './HealthMap'; // 가정: HealthMap 컴포넌트도 포함되어 있음
import ResultCard from './ResultCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
`;

const GradeSection = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const GradeBox = styled.div`
  flex: 1;
  min-width: 200px;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: ${({ grade }) =>
    grade === 'A' ? '#e6f7ff' : grade === 'B' ? '#fffbe6' : '#ffe6e6'};
`;

const Title = styled.h1`
  margin-bottom: 30px;
  color: #111827;
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
`;
const SubTitleTwo = styled.h3`
  margin-bottom: 10px;
`;


const ResultPage = () => {
  const location = useLocation();
  const gradeItems = location.state?.gradeItems || [];
  const showResultCard = location.state?.showResultCard ?? false;
  
  // B등급 2개 이상 또는 C등급 1개 이상일 경우 HealthMap 보이기
  const showHealthMap = gradeItems.filter(item => item.grade === 'B').length >= 2 || gradeItems.filter(item => item.grade === 'C').length >= 1;

  return (
    <Container>
      <Title>검사 결과</Title>

      <GradeSection>
        {gradeItems.map((item, idx) => (
          <GradeBox key={idx} grade={item.grade}>
            <SubTitle>{item.category}</SubTitle>
            <div>등급: {item.grade}</div>
            <div>점수: {item.score}점</div>
          </GradeBox>
        ))}
      </GradeSection>

      {showResultCard && <ResultCard results={gradeItems} />}
      
      {/* B등급 2개 이상 또는 C등급 1개 이상일 경우 HealthMap 보이기 */}
      {showHealthMap && <HealthMap />}
    </Container>
  );
};

export default ResultPage;
