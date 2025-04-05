import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Question from './components/Question'
import Button from '@mui/material/Button'

function App() {
  const API_URL = `https://opentdb.com/api.php?amount=10&category=12&type=multiple`;
  const [questionData, setQuestionData] = useState([]);
  const [Error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
// PROMISE CHAINS:
  useEffect(() => {
    fetch(API_URL).then(
      (response) => response.json()
    ).then((data) => {
      if (data.response_code === 0) {
        setQuestionData(data.results);
        setIsLoading(false);
      }
    }).catch((Error) => {
      setError(Error);
      console.error("There was an error fetching the data", Error);
      setIsLoading(false);
    });
  }, [API_URL]);

  console.log(questionData);

  if (isLoading) {
    return (
      <>
        <p>Fetching Your Questions, Refresh in 5 Seconds</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Quiz Questions</h1>
        {questionData.map((question, index) => (
          <Question key={index} index={index+1} questionData = {question}/>
        ))}
        <Button variant="contained">MUI Example</Button>
      </div>
    </>
  );
}

export default App