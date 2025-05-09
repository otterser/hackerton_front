import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/next");
  };

  return (
    <div className="main">
      <div className="title-container">
        <div className="title-wrapper">
          <h1 className="title">나의 심리 MBTI</h1>
        </div>
        <div className="subtitle-wrapper">
          <h2 className="sub-title">알아보기!</h2>
        </div>
      </div>
      <img 
        src="https://cdn.pixabay.com/photo/2024/06/01/02/40/toy-8801382_1280.png" 
        alt="곰돌이 이미지" 
        className="title-image"
      />
      <div className="content-container">
        <div className="memo-container">
          <div className="memo-paper">
            <p className="memo-text">다른 심리 검사와 달리 쉽고 간단하다!!</p>
          </div>
        </div>
      </div>
      <button onClick={handleStart} className="startBtn">
        시작하기
      </button>
    </div>
  );
} 