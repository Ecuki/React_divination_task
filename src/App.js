import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    active: "",
    text: "",
    divination: ["1", "2", "3"]
  };
  handleShowDivination = () => {
    const number = Math.floor(Math.random() * this.state.divination.length);
    console.log(number);
    this.setState({
      active: `${number}`
    });
  };
  handleTextChange = e => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  };
  handleAddDivination = () => {
    const text = this.state.text;
    const divination = this.state.divination;
    if (divination.includes(text)) {
      alert(`Ta wróżba jest już dodana`);
    } else if (text) {
      divination.push(text);
      this.state.text = "";
      alert(
        `Dodano wróżbę. Obecne wróżby to:${divination.map(item => ` ${item}`)}`
      );
    } else {
      alert(`Nie można dodać pustej wróżby`);
    }
    return divination;
  };
  render() {
    return (
      <div>
        <button className="myButton" onClick={this.handleShowDivination}>
          Zobacz wróżbę
        </button>
        <br />
        <input
          type="text"
          onChange={this.handleTextChange}
          className="enjoy-css"
          placeholder="Dodaj wróżbę"
          value={this.state.text}
        />
        <button className="myButton" onClick={this.handleAddDivination}>
          Dodaj wróżbę
        </button>
        <br />
        <h1>{this.state.divination[this.state.active]}</h1>
      </div>
    );
  }
}

export default App;
