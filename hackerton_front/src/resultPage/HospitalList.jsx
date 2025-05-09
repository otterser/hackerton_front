import React from 'react';
import styled from 'styled-components';

const HospitalItem = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border-bottom: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const HospitalName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`;

const HospitalAddress = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const HospitalDistance = styled.div`
  font-size: 14px;
  color: #0080ff;
  font-weight: 500;
`;

export default function HospitalList({ hospitals }) {
  return hospitals.map((hospital, i) => (
    <HospitalItem key={i}>
      <HospitalName>{hospital.name}</HospitalName>
      <HospitalAddress>{hospital.address}</HospitalAddress>
      <HospitalDistance>{hospital.distance}m 거리</HospitalDistance>
    </HospitalItem>
  ));
}
