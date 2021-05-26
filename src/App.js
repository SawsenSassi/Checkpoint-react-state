import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    Person : {
      fullName : "Sawsen Sassi",
      bio : `My name is Sawsen Sassi and I am a full-stack Web
      Application Developer and Software Developer, currently living in Tunisia. 
      I have a Bachelor degree in Computer Science from the higher institute of 
      economical and commercial science of tunis.
      My primary focus and inspiration for my studies is Web Development`,
      imgSrc : "https://jabailsapayanihome.files.wordpress.com/2018/09/welcome-to-my-blog1.gif?w=370",
      profession :"Full-Stack web developer"
    },
    show :true,
    date: new Date()
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="myImage"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        <h2> {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default App