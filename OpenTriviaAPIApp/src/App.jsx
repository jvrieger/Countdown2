import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Question from './components/Question'
import Answers from './components/Answers'
import Result from './components/Result'

function App() {
  const API_URL = `https://opentdb.com/api.php?amount=10&category=12&type=multiple`;
  const [questionData, setQuestionData] = useState([]);
  const [Error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  // useEffect requires an arrow func and array of dependencies
  // useEffect(callback, [dependencies])
  /* 
  // ASYNC/AWAIT:
  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.response_code === 0) {
          setQuestionData(data.results);
        }
      } 
      catch (error) {
        setError(error);
        console.error("There was an error fetching the data", error);
      }
    };
    fetchQuestionData();
    
  }, []);
*/

// Shuffle answers function
const shuffleAnswers = (answers) => {
  return answers.sort(() => Math.random() - 0.5); // Shuffle answers once
};

// PROMISE CHAINS: Fetch the question data and shuffle answers when the questions are loaded
  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      if (data.response_code === 0) {
        const questionsWithShuffledAnswers = data.results.map((question) => {
          const allAnswers = [question.correct_answer, ...question.incorrect_answers];
          question.shuffledAnswers = shuffleAnswers(allAnswers);
          return question;
        });
        setQuestionData(questionsWithShuffledAnswers);
        setIsLoading(false);
      }
    }).catch((Error) => {
      setError(Error);
      console.error("There was an error fetching the data", Error);
      setIsLoading(false);
    });
  }, [API_URL]);
  console.log(questionData); //for testing and debugging

  const handleAnswerClick = (selectedAnswer, correctAnswer, index) => {
    const isCorrect = selectedAnswer === correctAnswer;
    const newResults = [...results];
    newResults[index] = isCorrect ? 1 : 2; // store 1 for correct, 2 for incorrect (0 is haven't answered)
    setResults(newResults);
  }

  if (isLoading) {
    return (
      <>
        <p>Fetching Your Questions, Refresh in 5 Seconds</p>
      </>
    );
  }

  if (Error) {
    return <p>Error loading questions: {Error.message}</p>;
  }

  return (
    <>
      <div>
        <h1 className='heading'>Music Trivia!</h1>
        {questionData.map((question, index) => (
          <div key={index}>
          <Result isCorrect = {results[index]}/>
          <Question 
            index={index + 1} 
            questionData={question} />
          <Answers 
            answerData={question.shuffledAnswers} 
            handleAnswerClick={(selectedAnswer) => handleAnswerClick(selectedAnswer, question.correct_answer, index)}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default App