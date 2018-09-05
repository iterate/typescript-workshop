import * as React from 'react';
import SWAPIWrapper, { Starship } from '../../lib/swapi-wrapper/index';
import { StarshipComp } from './Starship';

const swAPI = new SWAPIWrapper();

interface State {
  currentResult: any[];
  currentQuery: string;
}

async function searchItem(query: string): Promise<Starship[]> {
  return await swAPI.searchStarships(query);
}

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    currentResult: [],
    currentQuery: void 0
  };

  handleKeyPress = async (e: React.KeyboardEvent) => {
    const { currentQuery } = this.state;
    if (e.key == 'Enter' && currentQuery.length > 2) {
      const starships: Starship[] = await searchItem(currentQuery);
      this.setState({ currentResult: starships });
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.currentTarget.value;
    this.setState({ currentQuery: value });
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Søk etter en planet 🌏</h1>
          <input
            type="text"
            className="input is-large"
            placeholder="Søk etter et romskip"
            onChange={this.onChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="container">{this.state.currentResult.length >= 1 && <StarshipComp />}</div>
      </div>
    );
  }
}

export default App;
