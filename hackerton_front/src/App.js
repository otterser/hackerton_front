import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    
    &:hover {
      color: #007bff;
    }
  }
`;

// 페이지 컴포넌트들
const Home = () => <div>홈 페이지</div>;
const About = () => <div>소개 페이지</div>;
const Contact = () => <div>연락처 페이지</div>;

function App() {
  return (
    <Router>
      <Header>
        <Nav>
          <a href="/">홈</a>
          <a href="/about">소개</a>
          <a href="/contact">연락처</a>
        </Nav>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;