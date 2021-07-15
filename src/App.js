import { Component } from "react";
import "./App.css";

import { CharacterCard } from "./components/CharacterCard";

class App extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          results: result.results,
        })
      );
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <h1>The Ricky and Morty API</h1>
        </div>

        <div className="grid-container">
          {this.state.results.length > 0 &&
            this.state.results.map((el) => {
              return (
                <div className="grid-item">
                  <CharacterCard character={el} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
