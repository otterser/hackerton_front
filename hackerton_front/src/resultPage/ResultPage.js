import React from "react";
import styled from "styled-components";
import useHealthMap from "./HealthMap";
import ResultCard from "./ResultCard";
import HospitalList from "./HospitalList";
import Score from "./Score";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #f9f9f9;
`;

const Header = styled.h1`
  text-align: center;
  margin: 30px 0 10px 0;
  color: #222;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const MapAndListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

const MapContainer = styled.div`
  height: 400px;
`;

const ListContainer = styled.div`
  padding: 20px;
  background: #fff;
`;

const ResultPage = () => {
  const dataGroups = [
    [25], // 그룹 1
    [35], // 그룹 2
    [60] // 그룹 3
  ];

  const { mapRef, hospitals, loading } = useHealthMap();

  return (
    <Container>
      <Header>검사 결과</Header>
      <ContentBlock>
        <Score dataGroups={dataGroups} />
      </ContentBlock>

      <MapAndListWrapper>
        <MapContainer ref={mapRef} />
        <ListContainer>
          <h2 style={{ color: "#0080ff", marginBottom: "20px" }}>내 주변 정신병원</h2>
          {loading ? <p>불러오는 중...</p> : <HospitalList hospitals={hospitals} />}
        </ListContainer>
      </MapAndListWrapper>
    </Container>
  );
};

export default ResultPage;
