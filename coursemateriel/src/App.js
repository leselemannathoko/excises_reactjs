// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/* eslint-disable */ 
import './App.css';
import { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id:'1', name: 'Madala', age:60},
      {id:'2', name: 'Magogo', age:60},
      {id:'23', name: 'Ngwana', age:28}

    ],
    otherState: 'some state down here',
    showperson: false
  }


  switchNameHandler = (newName) => {
   this.setState({
    persons: [
      {name:'newName', age: 28},
      {name: 'Gregg', age: 11},
      {name: 'Stephina', age: 50}
    ]
  })
  }

  namechangedHandler = (event) => {
   this.setState({
    persons: [
      {name:'max', age: 28},
      {name: event.target.value, age : 25},
      {name: 'Steph', age: 50}
    ]
  })
  }

  deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons: persons})

  }

  togglePersonshandler = () => {
   const doesShow = this.state.showperson;
   this.setState( { showperson: !doesShow});
  }



  render () {

    let persons = null;

    if(this.state.showperson){ 
      
      persons = ( 
      <div>
           {this.state.persons.map((person, index ) => {
                return <Person
                    click= {()=> this.deletePersonHandler(index)}
                    name= {person.name}
                    age= {person.age}
                    key= {person.id} />
           })}
      </div> 
      );
    }

  return (
    <div className="App">

        <p>
          The course Sample Project.
        </p>
        <button onClick = {this.togglePersonshandler}>Toggle</button>

        {persons}
    </div>
  );
  }
}


export default App;

