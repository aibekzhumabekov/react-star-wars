import React from 'react';
import PlanetsPage from './pages/PlanetsPage/PlanetsPage';
import {fetchAllPlanets} from './services/sw-api';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {

  state = {
    planets: []
  }

  async componentDidMount() {
    let foundPlanets = await fetchAllPlanets();
    this.setState({
      planets: foundPlanets.results
    });
  };

  render(){
    let listOfPlanets = this.state.planets.map((planet, idx) =>
      <Link key={idx} to={`/planets/${idx}`} className="App-button">
        {planet.name}
      </Link>);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ultimate Planets Wiki</h1>
        <p>...but only from Star Wars</p>
      </header>
      { this.state.planets.length ?
        <Switch>
          <Route exact path='/' render={()=> <div>{listOfPlanets}</div> } />
          <Route path='/planets/:id' render={props => 
          <PlanetsPage {...props} planet={this.state.planets[props.match.params.id]}/>
          }
          />
        </Switch>
        :
          <div className="loading">Loading...</div>
        }
    </div>
    );
  }
}

export default App;
