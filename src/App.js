import React,{useEffect,useState} from 'react';
import './App.css';
import SquareComponent from './Modules/SquareComponent';

const clearState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(clearState)
  const [isXchance, updateIsXChance] = useState(true)
  
  
  const onUserClicked = (index)=>{
    let strings=Array.from(gameState)
    if(strings[index] || checkWinner(gameState))
      return;
    strings[index]=isXchance ? 'X':'O';
    updateIsXChance(!isXchance)
    updateGameState(strings)
    
  }
  const resetGame = ()=>{
    updateGameState(clearState)
  }
  useEffect(() => {
    let winner = checkWinner();
    let draw =checkDraw();

    if(winner){
      resetGame()
      alert(`Ta Da '${winner}' won the game`)
    }
    else{
      if(draw){
        resetGame()
        alert('Draw')
      }
    }
    
}, [gameState])


  
  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  const checkDraw=()=>{
    let flag=false
      gameState.forEach(element => {
        if (element===''){
          flag=true
        }
      });
      return(
        flag ? false:true
      )
  }
  const renderSquare=(index)=>{
    return(
      <SquareComponent
      value={gameState[index]}
      onClick={()=>onUserClicked(index)}
      />
    )
  }

  return (
    <div className="App">
      <div className="App-Header">
        React Tic Tac Toe
      </div>
      <div className="Board">
        
        <div className="Row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        
        </div>
        <div className="Row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="Row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="clear-btn" onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );
}

export default App;
