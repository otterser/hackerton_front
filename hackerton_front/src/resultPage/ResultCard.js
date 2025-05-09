import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 15px;
  font-size: 1.5rem;
`;

const Content = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ResultCard = ({ results = [] }) => {
  // B 등급이 2개 이상인지 확인
  const hasMultipleB = results.filter(result => result.grade === 'B').length >= 2;
  
  // C 등급이 2개 이상인지 확인
  const hasMultipleC = results.filter(result => result.grade === 'C').length >= 2;

  if (!hasMultipleB && !hasMultipleC) {
    return null; // 조건에 맞지 않으면 아무것도 렌더링하지 않음
  }

  return (
    <Card>
      
      {hasMultipleB && (
        <>
          <Title>주의가 필요한 수준입니다다</Title>
          <Content>
            
            여러 영역에서 주의가 필요한 것으로 나타났습니다. 
            전문가와 상담을 통해 더 자세한 분석을 받아보시는 것을 추천드립니다.
          </Content>
        </>
      )}
      
      {hasMultipleC && (
        <>
          <Title>많이 힘드셨겠어요</Title>
          <Content>
            여러 영역에서 심각한 문제가 발견되었습니다. 
            가능한 빨리 전문가와 상담하시는 것을 강력히 권장드립니다.
          </Content>
        </>
      )}
    </Card>
  );
};

export default ResultCard;