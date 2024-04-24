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
            <label className="name-label">Enter Your Name:</label>
            <input className="name-input" type="text" placeholder="Ex. John Doe" onChange={handleInputChange}/>
            {/* {isNameEmpty && <span>Cannot be empty!</span>} */}
            <button 
                onClick={() => setGameState("playing")} disabled={isNameEmpty}>
                Start Quiz
            </button>
        </div>
    )
}

export default Menu;