import { useEffect, useRef, useState } from 'react';

export default function HealthMap() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=YOUR_API_KEY`;
    script.async = true;
    script.onload = () => initMap();
    document.body.appendChild(script);
  }, []);

  const initMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const center = new window.naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          const naverMap = new window.naver.maps.Map(mapRef.current, {
            center,
            zoom: 14,
          });

          new window.naver.maps.Marker({
            position: center,
            map: naverMap,
            icon: {
              url: 'https://openapi.map.naver.com/openapi/v3/static/icons/marker_red.png',
              size: new window.naver.maps.Size(24, 37),
              anchor: new window.naver.maps.Point(12, 37),
            },
          });

          const hospitals = generateMockHospitals(center, 2000);
          hospitals.forEach(h => {
            new window.naver.maps.Marker({
              position: h.position,
              map: naverMap,
              title: h.name,
            });
          });

          setHospitals(hospitals);
          setMap(naverMap);
          setLoading(false);
        },
        err => {
          alert('위치 정보를 가져올 수 없습니다.');
          setLoading(false);
        }
      );
    }
  };

  const generateMockHospitals = (center, radius) => {
    const results = [];
    for (let i = 0; i < 10; i++) {
      const r = Math.random() * radius;
      const theta = Math.random() * 2 * Math.PI;
      const dx = r * Math.cos(theta);
      const dy = r * Math.sin(theta);
      const lat = center.lat() + (dy / 111000);
      const lng = center.lng() + (dx / (111000 * Math.cos(center.lat() * Math.PI / 180)));

      results.push({
        name: `${i + 1}번 정신과 의원`,
        address: `서울특별시 강남구 무작위${100 + i}길`,
        distance: Math.round(r),
        position: new window.naver.maps.LatLng(lat, lng),
      });
    }
    return results.sort((a, b) => a.distance - b.distance);
  };

  return { mapRef, hospitals, loading };
}
