import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import {GameStateContext} from './helpers/Contexts';
import {useState} from 'react';

function App() {

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz Application </h1>
      <GameStateContext.Provider 
        value={{
          gameState, 
          setGameState, 
          userName, 
          setUserName, 
          score, 
          setScore
        }}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'finished' && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
