import '../App.css'
import { Questions } from '../helpers/Questions'
import { useState } from 'react';
import { useContext } from 'react'
import { GameStateContext } from '../helpers/Contexts'
 
function Quiz(){

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const {score, setScore, gameState, setGameState} = useContext(GameStateContext);

    const chooseOption = (option) => {
        setOptionChosen(option);
      };

    const nextQuestion = () => {

        if (optionChosen === "") {
            alert("Please choose an option before going to the next question.");
            return;
        }
        else  if (Questions[currentQuestion][Questions[currentQuestion].answer] === optionChosen) {
            setScore((prevScore) => prevScore + 1);
        }
        setOptionChosen("");
        setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (optionChosen === "") {
            alert("Please choose an option before finishing the quiz.");
            return;
        }
        else if (Questions[currentQuestion][Questions[currentQuestion].answer] === optionChosen) {
            setScore((prevScore) => prevScore + 1);
          }
        setGameState("finished");
    };
            
    const buttonClass = (option) => (
        optionChosen === option ? 'chosen-option' : 'default-option'
      );

    return (
    <div className="Quiz">
        <div className="question-prompt">
        <h3>{Questions[currentQuestion].prompt}</h3>
        </div>
        <div className="answers">
        {['optionA', 'optionB', 'optionC', 'optionD'].map((optionKey) => (
            <button
            key={optionKey}
            className={buttonClass(Questions[currentQuestion][optionKey])}
            onClick={() => chooseOption(Questions[currentQuestion][optionKey])}
            >
            {Questions[currentQuestion][optionKey]}
            </button>
        ))}
        </div>
        {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="finishQuizButton">Finish Quiz</button>
        ) : (
        <button onClick={nextQuestion} id="nextQuestionButton">Next Question</button>
        )}
    </div>
    );
}

export default Quiz;