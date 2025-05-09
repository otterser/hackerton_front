import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Styled-components
const MapContainer = styled.div`
  width: 100%;
  height: 400px; // 지도 크기
`;

const HospitalListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`;

const HospitalItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 8px;
  background-color: #f9fafb;
`;

export default function HealthMap() {
  const mapRef = useRef(null); // 지도 DOM 참조
  const [map, setMap] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Naver Map API 로딩
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=YOUR_API_KEY`;
    script.async = true;
    script.onload = () => initMap();
    document.body.appendChild(script);
  }, []);

  const initMap = () => {
    // 위치 정보 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          // 지도 초기화
          const center = new window.naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          const naverMap = new window.naver.maps.Map(mapRef.current, {
            center,
            zoom: 14,
          });

          // 현재 위치에 마커 표시
          new window.naver.maps.Marker({
            position: center,
            map: naverMap,
            icon: {
              url: 'https://openapi.map.naver.com/openapi/v3/static/icons/marker_red.png',
              size: new window.naver.maps.Size(24, 37),
              anchor: new window.naver.maps.Point(12, 37),
            },
          });

          // 가상의 병원 데이터 생성
          const mockHospitals = generateMockHospitals(center, 2000);
          mockHospitals.forEach((hospital) => {
            new window.naver.maps.Marker({
              position: hospital.position,
              map: naverMap,
              title: hospital.name,
            });
          });

          setHospitals(mockHospitals);
          setMap(naverMap);
          setLoading(false);
        },
        (err) => {
          alert('위치 정보를 가져올 수 없습니다.');
          setLoading(false);
        }
      );
    }
  };

  // 가상의 병원 데이터 생성
  const generateMockHospitals = (center, radius) => {
    const results = [];
    for (let i = 0; i < 10; i++) {
      const r = Math.random() * radius;
      const theta = Math.random() * 2 * Math.PI;
      const dx = r * Math.cos(theta);
      const dy = r * Math.sin(theta);
      const lat = center.lat() + dy / 111000;
      const lng = center.lng() + dx / (111000 * Math.cos(center.lat() * Math.PI / 180));

      results.push({
        name: `${i + 1}번 정신과 의원`,
        address: `서울특별시 강남구 무작위${100 + i}길`,
        distance: Math.round(r),
        position: new window.naver.maps.LatLng(lat, lng),
      });
    }
    return results.sort((a, b) => a.distance - b.distance); // 거리 순으로 정렬
  };

  return (
    <div>
      {/* 지도 컴포넌트 */}
      <MapContainer ref={mapRef} />

      {/* 병원 목록 렌더링 */}
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <HospitalListContainer>
          <h3>주변 병원 목록</h3>
          {hospitals.map((hospital, index) => (
            <HospitalItem key={index}>
              <strong>{hospital.name}</strong>
              <p>{hospital.address}</p>
              <p>거리: {hospital.distance}m</p>
            </HospitalItem>
          ))}
        </HospitalListContainer>
      )}
    </div>
  );
}
