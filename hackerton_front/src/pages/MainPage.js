import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/Page");
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
      <div className="image-container">
        <div className="speech-bubble">재밌어요!</div>
        <img 
          src="https://cdn.pixabay.com/photo/2024/06/01/02/40/toy-8801382_1280.png" 
          alt="곰돌이 이미지" 
          className="title-image"
        />
      </div>
      <div className="content-container">
        <div className="info-box">
          <p>3가지 주제에서 각 9문항, 총 27문항의 심리 검사로 나의 심리 MBTI를 알아볼수 있어요.</p>
        </div>
      </div>
      <button onClick={handleStart} className="startBtn">
        시작하기
      </button>
    </div>
  );
} 