import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dogs extends Component {
    render() {
        const dogs = this.props.dogList
        var req = require.context("./imgs", false, /.*\.jpg$/);
        req.keys().forEach(function(key){
            req(key);
            console.log(key);
        })
        return (
            <div>
                <div>
                    <img src="./hazel.jpg"></img>
                    <Link to='/whiskey'><h1>Whiskey</h1></Link>
                </div>
            </div>
        )
    }
}

export default Dogs;