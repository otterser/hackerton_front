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

const MapContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
`;

const MapTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-weight: 500;
`;

const MapInfo = styled.p`
  margin-top: 15px;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
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

  // B 등급이 2개 이상인지 확인
  const hasMultipleB = results.filter(result => result.grade === 'B').length >= 2;
  
  // C 등급이 1개 이상인지 확인
  const hasC = results.filter(result => result.grade === 'C').length >= 1;

  // 지도 표시 조건 확인
  const shouldShowMap = hasMultipleB || hasC;

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

      {shouldShowMap && (
        <MapContainer>
          <MapTitle>주변 상담 센터 및 병원</MapTitle>
          <MapPlaceholder>
            지도 로딩 중...
          </MapPlaceholder>
          <MapInfo>
            * 현재 위치 기반으로 주변의 정신건강 전문 상담 센터와 병원을 보여드립니다.
            <br />
            * GPS 위치 정보 수집에 동의해주시면 더 정확한 정보를 제공해드립니다.
          </MapInfo>
        </MapContainer>
      )}
    </Container>
  );
};

export default HealthMap;