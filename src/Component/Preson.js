import react, { Component } from 'react';

//functio component
// const Person = (props) =>{
// return(
//     <h1> this is a {props.name}. I'm {props.age} year old</h1>

//     );
// };

//class component

class Person extends Component{
    render(){
        return(
            <p> this is a {this.props.name}. I'm {this.props.age}</p>
        )
    }
}

export default Person