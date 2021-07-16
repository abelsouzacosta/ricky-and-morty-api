import { Component } from "react";
import "./App.css";

import { CharacterCard } from "./components/CharacterCard";
import { Button } from "./components/Button";

class App extends Component {
  state = {
    info: {},
    results: [],
  };

  doApiRequest = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          ...result,
        })
      );
  };

  componentDidMount() {
    this.doApiRequest("https://rickandmortyapi.com/api/character");
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  handleNextClick = () => {
    this.doApiRequest(this.state.info.next);
  };

  handlePrevClick = () => {
    this.doApiRequest(this.state.info.prev);
  };

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <h1>The Ricky and Morty API</h1>
        </div>

        <div className="mandatory-buttons">
          <Button
            onclick={this.handlePrevClick}
            disabled={this.state.info.prev ? false : true}
          >
            Prev
          </Button>
          <Button
            disabled={this.state.info.next ? false : true}
            onclick={this.handleNextClick}
          >
            Next
          </Button>
        </div>

        <div className="grid-container">
          {this.state.results.length > 0 &&
            this.state.results.map((el) => {
              return (
                <div key={el.id} className="grid-item">
                  <CharacterCard character={el} />
                </div>
              );
            })}
        </div>

        <div className="mandatory-buttons bottom-buttons">
          <Button
            onclick={this.handlePrevClick}
            disabled={this.state.info.prev ? false : true}
          >
            Prev
          </Button>
          <Button
            disabled={this.state.info.next ? false : true}
            onclick={this.handleNextClick}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
