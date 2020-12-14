import './App.css';
import React from 'react';
import myImage from './imageInSrc.jpg';

class App extends React.Component {
  state = {
    Person: {
      fullName : "Naruto Uzumaki",
      bio : "I just love ramen",
      imgSrc : myImage,
      profession : "7th Hokage"
    },
    show : true,
    counter : 0
  };
  handleShowPerson = () => {
    this.setState({
      show: !this.state.show
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        {this.state.show && (
          <>
            <h1>Full Name : {this.state.Person.fullName}</h1>
            <h1>My Bio : {this.state.Person.bio}</h1>
            <h1>My Profession : {this.state.Person.profession}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto" height="460"></img>
            <br></br>
          </>
        )}
        <button onClick={this.handleShowPerson}>CLICK ME</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
