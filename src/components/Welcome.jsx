import { useContext } from "react";
import { QuizContext } from "../context/quiz";


import Quiz from "../img/bg_one_one.png"
import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id="welcome">
        <h2>Bem-vindo<span>&#128587;&#127995;</span></h2>
        <p>Vamos começar? É só clicar no botão! </p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Bora!<span>&#129310;</span></button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome