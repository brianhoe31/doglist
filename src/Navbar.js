import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render(){
        const dogs = this.props.dogList.map((e, idx) => (
            <NavLink exact activeClassName="Navbar-active" to={`/dogs/${e.name}`} key={idx}>{e.name}</NavLink>
        ))
        return(
            <div className="Navbar">
                <NavLink exact activeClassName="Navbar-active" to='/dogs'>Home</NavLink>
                {dogs}
            </div>
        )
    }
}

export default Navbar;