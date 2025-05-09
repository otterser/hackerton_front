// PageSol.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// Styled components...
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

function Pagesol() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ptsdScore, depressionScore } = location.state || {};
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/questions/anxiety')
      .then((response) => response.json())
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
    const scores = Object.values(answers).filter((val) => val !== null);
    const total = scores.reduce((acc, val) => acc + val, 0);
    console.log('불안 총합 점수:', total);

    navigate('/score', {
      state: {
        dataGroups: [
          [ptsdScore],
          [depressionScore],
          [total],
        ]
      }
    });
  };

  return (
    <div>
      <h1>불안 문항</h1>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <span>문항 {index + 1}: {question}</span>
              <div>
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
              </div>
            </li>
          ))}
        </ul>
      )}
      <Button onClick={handleSubmit}>제출</Button>
    </div>
  );
}

export default Pagesol;
