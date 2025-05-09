import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dataGroups = location.state?.dataGroups || []; // 각 페이지에서 얻은 점수들

  // 점수를 100%로 계산하고 A, B, C로 나누는 함수
  const calculateGrade = (score) => {
    const percentage = (score / 100) * 100; // 점수를 100% 기준으로 변환

    if (percentage <= 33) {
      return 'A'; // 0% ~ 33% -> A
    } else if (percentage <= 66) {
      return 'B'; // 34% ~ 66% -> B
    } else {
      return 'C'; // 67% ~ 100% -> C
    }
  };

  // gradeItems에 각 점수에 대해 등급을 매긴 데이터를 추가
  const gradeItems = dataGroups.map((group, idx) => {
    const totalScore = group.reduce((acc, cur) => acc + cur, 0);
    const grade = calculateGrade(totalScore); // 각 점수에 대한 등급 계산
    return {
      category: ['PTSD', '우울', '불안'][idx], // 카테고리 이름
      score: totalScore.toFixed(1), // 점수
      grade, // 계산된 등급
    };
  });

  // 등급이 B가 2개 이상이거나 A가 1개 이상이면 ResultCard를 표시
  const showResultCard = gradeItems.some(item => item.grade === 'B') || gradeItems.some(item => item.grade === 'A');

  // ResultPage로 이동하면서 gradeItems 데이터를 전달
  useEffect(() => {
    navigate('/result', {
      state: {
        gradeItems,
        showResultCard,
      }
    });
  }, [navigate, gradeItems, showResultCard]);

  return null; // Score 컴포넌트 자체는 아무것도 렌더링하지 않음
};

export default Score;
