import React, {useState, useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MajorButtons from './MajorButtons';
import Major from './Major';
import majorsList from './MajorBtns.json';

// let filteredMajorsList = majorsList;

export default function CareersButtons() {

    const [filteredList, setFilteredList] = useState(majorsList);

    const handleOnInput = (e) => {
        setFilteredList(majorsList.filter(major => major.name.includes(e.target.value.toUpperCase())));
    }

    return (
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
                    <section id="seleccionPlan">
                        <h1 className="titulo">Planes de estudio</h1>
                        <h2 htmlFor="searchStudyPlan" color="white">Selecciona tu plan de estudios:</h2>
                        <input 
                            type="text" 
                            className="form-control"
                            id="searchStudyPlan" 
                            placeholder="Search" 
                            autoComplete="off"
                            onInput={handleOnInput}
                        />
                        <MajorButtons 
                            majorsList={filteredList}
                        />
                    </section>
                </React.Fragment>
            )} />
            <Route path="/major" component={Major}/>
		</Router>
    )
}
