import React from 'react';
import { Link } from 'react-router-dom';

class StarShips extends React.Component {
    render(){
        const { name, model}=this.props.ship;
        return(
            <div className="StarshipsPage-info">
                <h1>Name : { name } </h1>
                <p>Model: { model }</p>
                <Link to='/'>Go back to home</Link>
            </div>
        )
    }
    
}
export default StarShips;