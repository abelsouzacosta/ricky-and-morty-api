import { Component } from "react";
import "./App.css";

import { CharacterCard } from "./components/CharacterCard";

class App extends Component {
  state = {
    results: [
      {
        id: 1,
        name: "Ricky Sanchez",
        status: "Alive",
        gender: "Male",
        species: "Human",
        origin: {
          name: "Earth",
        },
        location: {
          name: "Earth, Replacement Universe",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
    ],
  };

  // componentDidMount() {
  //   fetch(`https://rickandmortyapi.com/api/character`)
  //     .then((response) => response.json())
  //     .then((result) =>
  //       this.setState({
  //         results: result.results,
  //       })
  //     );
  // }

  render() {
    return (
      <div className="App">
        {this.state.results.length > 0 &&
          this.state.results.map((el) => {
            return <CharacterCard character={el} />;
          })}
      </div>
    );
  }
}

export default App;
