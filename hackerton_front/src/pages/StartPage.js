import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/next");
  };

  return (
    <div className="main">
      <h1 className="title">나의 심리 MBTI는?</h1>
      <button onClick={handleStart} className="startBtn">
        시작하기
      </button>
    </div>
  );
} 