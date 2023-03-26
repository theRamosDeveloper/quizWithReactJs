import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Welldone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id="gameover">
        <p>Sua pontuação: {quizState.score}</p>
        <p>Acerto(s): {quizState.score} de {quizState.questions.length} {" "} perguntas.</p>
        <img src={Welldone} alt="Fim do quiz" />
        <button onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar? <span>&#128515;</span></button>
    </div>
  )
}

export default GameOver