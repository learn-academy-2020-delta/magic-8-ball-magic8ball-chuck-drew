import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["not today!!", "maybe", "As I see it", "yes!!", "Ask again later", "Better not tell you now",  "My reply is no"],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state

    // Update the return statement below to reflect the outcome of your code.
    return answerArray[Math.floor(Math.random() * answerArray.length)];
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1 id="ourTitle">Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          placeholder="Ask the Magic 8-Ball a Question"
          onChange={ this.handleChange }
        />
        <br />
        <button id="ourButton" onClick={ this.handleSubmit }>
          Shake the Magic 8-Ball
        </button>
        <p id="ourAnswer"> { this.state.answer } </p>
      </div>
    )
  }
}

export default App;
