import '../App.css';
import {useContext, useState} from 'react'
import {GameStateContext} from '../helpers/Contexts'

function Menu(){

    const {gameState, setGameState, userName, setUserName} = useContext(GameStateContext);
    const [isNameEmpty, setIsNameEmpty] = useState(true);
    
    const handleInputChange = (event) => {
        setUserName(event.target.value)
        setIsNameEmpty(event.target.value.trim() === '');
    }

    return (
        <div className="Menu">
            <h1 className='menu-header'>Programming Language Quiz</h1>
            <div className='menu-items'>
                <label className="name-label">Enter Your Name:</label>
                <input className="name-input" type="text" placeholder="Ex. John Doe" onChange={handleInputChange}/>
                {/* {isNameEmpty && <span>Cannot be empty!</span>} */}
                <button 
                    className='start-quiz-btn'
                    onClick={() => setGameState("playing")} disabled={isNameEmpty}>
                    Start Quiz
                </button>
            </div>
        </div>
    )
}

export default Menu;