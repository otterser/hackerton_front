import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #111827;
  margin-bottom: 20px;
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
`;

const QuestionItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #f9fafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 10px;
`;

function Pages() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/questions/ptsd')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
        const initialAnswers = {};
        data.forEach((_, index) => {
          initialAnswers[index] = null;
        });
        setAnswers(initialAnswers);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, []);

  const handleCheckboxChange = (questionIndex, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = () => {
    const scores = Object.values(answers).filter(val => val !== null);
    const total = scores.reduce((acc, val) => acc + val, 0);
    console.log('제출된 답변:', answers);
    console.log('총합 점수:', total);

    navigate('/score', {
      state: {
        dataGroups: [[total], [35], [60]], // PTSD: 실제 점수, 우울/불안: 예시
      }
    });
  };

  return (
    <Container>
      <Title>외상 스트레스 장애</Title>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <QuestionList>
          {questions.map((question, index) => (
            <QuestionItem key={index}>
              <span>
                문항 {index + 1}: {question}
              </span>
              <CheckboxGroup>
                {[0, 1, 2, 3].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={value}
                      checked={answers[index] === value}
                      onChange={() => handleCheckboxChange(index, value)}
                    />
                    {value}
                  </label>
                ))}
              </CheckboxGroup>
            </QuestionItem>
          ))}
        </QuestionList>
      )}
      <Button onClick={handleSubmit}>제출</Button>
    </Container>
  );
}

export default Pages;
