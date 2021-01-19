import { useState } from "react";
import "./EightBall.css";
/*
  Props:
  answers : [{ msg: "It is certain.", color: "green" }, ...]
  States: 
    currentColor 
    currentText 
  App -> EightBall 
  */
function EightBall({ answers }) {
  const defaultAnswer = {color: "black", msg: "Think of a Question"};
  const [currentColor, setCurrentColor] = useState(defaultAnswer.color);
  const [currentText, setCurrentText] = useState(defaultAnswer.msg);
  /* helper function for choosing a random message */
  function chooseRandomMessage(answers) {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIdx];
    setCurrentColor(answer.color);
    setCurrentText(answer.msg);
  }
  return (
  // setter in anon function
    <div>
        <div className="EightBall" style={{backgroundColor : currentColor}} onClick = {() => { chooseRandomMessage(answers) }}>
    <h3 className="EightBall-text"> {currentText} </h3>
    </div > 
    <button onClick = {() => { chooseRandomMessage([defaultAnswer]) }}> Reset the 8ball</button>
    </div>
)

}


EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;