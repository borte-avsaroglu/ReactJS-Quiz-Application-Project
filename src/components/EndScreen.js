import '../App.css'
import React from "react";
import { useContext } from 'react'
import { GameStateContext } from '../helpers/Contexts'
import { Questions } from '../helpers/Questions'


const EndScreen = () => {

    const {score, setScore, setGameState, userName} = useContext(GameStateContext);

    const reastartQuiz = () => {
        setScore(0)
        setGameState('menu')
    }
    
    return (
    <div className='EndScreen'>
        <h1>Quiz Finished!</h1>
        <h3>{userName}</h3>
        <h3>Your score: {score} / {Questions.length}</h3>
        <button onClick={reastartQuiz}>Restart Quiz</button>
    </div>);
};

export default EndScreen;