import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import StartPage from './pages/StartPage';
import NextPage from './pages/NextPage';
import ResultPage from './resultPage/ResultPage';

// 레이아웃 컴포넌트
const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const SideSection = styled.div`
  flex: 1;
  background-color: rgb(128, 143, 133);
`;

const MainSection = styled.div`
  flex: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <Layout>
      <SideSection />
      <MainSection>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/next" element={<NextPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </MainSection>
      <SideSection />
    </Layout>
  )
}

export default App;