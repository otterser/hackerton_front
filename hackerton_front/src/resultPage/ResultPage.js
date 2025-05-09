// import React from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import React, { useEffect, useState } from 'react';
import useHealthMap from "./HealthMap";
import HospitalList from './HospitalList';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const ListContainer = styled.div`
  width: 60%;
  padding: 20px;
  overflow-y: auto;
  background: #fff;
`;

const Title = styled.div`

`
const ResultPage = () => {
  const { mapRef, hospitals, loading } = useHealthMap();

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
      <ResultCard results={results} />
      <MapContainer ref={mapRef} />
      <ListContainer>
        <h2 style={{ color: '#0080ff', marginBottom: '20px' }}>내 주변 정신병원</h2>
        {loading ? <p>불러오는 중...</p> : <HospitalList hospitals={hospitals} />}
      </ListContainer>
    </Container>
  );
};

export default ResultPage; 