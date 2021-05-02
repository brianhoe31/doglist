import React, { Component } from 'react';

class DogProfile extends Component {
    render(){
        const list = this.props.dogList;
        const name = this.props.name.match.params.name;
        let profile = {};
        
        list.forEach(dog => {
            if(dog.name === name){
                profile = dog;
            }
        })
        console.log('profile is', profile);

        return(
            <div>
                Dog
            </div>
        )
    }
}

export default DogProfile;
