import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import CareersButtons from './CareersButtons';
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Major from './MajorTable/Major';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
            {/* <div className="App">
                <div className="container">
                    <Header/>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About}/>
                </div>
            </div> */}
            <Route exact path="/" render={props => (
                <React.Fragment>
                    <CareersButtons />
                    <Footer/>
                </React.Fragment>
            )} />
            <Route path="/major" component={Major}/>
		</Router>
  );
}

export default App;

function Footer() {
  return (
      <section id="credits">
          <div style={{color:"white", textAlign: "center"}}>
              Created by: <a href="https://github.com/luispc111" target="_blank">Luis Alberto Pérez</a> & <a href="https://github.com/albgv1402" target="_blank">Alberto García</a>
          </div>
          <a href="https://github.com/luispc111/PlanesDeEstudio" target="_blank">
              <img src="./img/GitHub-Mark-Light-32px.png" alt="Github link" className="centerImage"/>
          </a>
      </section>
  )
}
