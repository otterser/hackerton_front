import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ResultCard from './ResultCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const GradeSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
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

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Score = () => {
    const location = useLocation();
    const dataGroups = location.state?.dataGroups || [];
  
    const labels = ['PTSD', '우울', '불안'];
    const gradeLevels = ['A', 'B', 'C'];
  
    const gradeItems = dataGroups.map((group, idx) => {
      const avg = group.reduce((acc, cur) => acc + cur, 0) / group.length;
      return {
        score: avg.toFixed(1),
        grade: gradeLevels[idx],
        category: labels[idx],
      };
    });
  
    const countB = gradeItems.filter(item => item.grade === 'B').length;
    const countA = gradeItems.filter(item => item.grade === 'A').length;
    const showResultCard = countB >= 2 || countA >= 1;
  
    return (
      <Container>
        <GradeSection>
          {gradeItems.map((item, idx) => (
            <GradeBox key={idx} grade={item.grade}>
              <Title>{item.category}</Title>
              <div>등급: {item.grade}</div>
              <div>평균 점수: {item.score}점</div>
            </GradeBox>
          ))}
        </GradeSection>
  
        {showResultCard && <ResultCard results={gradeItems} />}
      </Container>
    );
  };
  
  export default Score;