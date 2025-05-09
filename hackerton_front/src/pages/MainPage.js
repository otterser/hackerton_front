import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/next");
  };

  return (
    <div className="main">
      <div className="title-container">
        <h1 className="title">나의 심리 MBTI</h1>
        <h2 className="sub-title">알아보기!</h2>
      </div>
      <div className="content-container">
        <p className="description">다른 심리 검사와 달리 쉽고 간단하다</p>
        <img 
          src="https://cdn.pixabay.com/photo/2016/03/31/19/13/memo-1293086_1280.png" 
          alt="메모장 이미지" 
          className="memo-image"
        />
      </div>
      <button onClick={handleStart} className="startBtn">
        시작하기
      </button>
    </div>
  );
} 