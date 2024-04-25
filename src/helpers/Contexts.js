import { createContext } from "react";

export const GameStateContext = createContext({
    score: 0,
    gameState: 'menu',
    setScore: () => {},
    setGameState: () => {},
    userName: '',
    setUserName: () => {},
  });