import React from 'react';
import { Link } from 'react-router-dom';

class PlanetsPage extends React.Component {
    render(){
        const {name, population} = this.props.planet;
        return (
            <div className="PlanetsPage-info">
                <h1>Name: {name} </h1>
                <p>Population: {population}</p>
                <Link to='/'>Go back home</Link>
            </div>
        )
    }
}


export default PlanetsPage;