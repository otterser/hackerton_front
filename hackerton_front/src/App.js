import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// import MainPage from './pages/MainPage';
// import SurveyPage from './pages/SurveyPage';
import Page from './Page'
import Pages from './Pages';
import ResultPage from './resultPage/ResultPage';
import MainPage from './pages/MainPage';

// 레이아웃 컴포넌트
const Layout = styled.div`
  display: flex;
  height: 100%;`
;

const SideSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;`
;

const MainSection = styled.div`
  flex: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height : 100%`
  
;

function App() {
  return (
    <Layout>
      <SideSection />
      <MainSection>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/next" element={<NextPage />} /> */}
          <Route path="/result" element={<ResultPage />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>
      </MainSection>
      <SideSection />
    </Layout>
  )
}

export default App;
