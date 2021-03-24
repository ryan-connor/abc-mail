import {React, useState} from 'react';
import './App.css';
import Header from './components/Header';
import FileDisplay from './components/FileDisplay';
import SearchBar from './components/SearchBar';

function App() {

  //initialize search criteria state
let [searchCriteria, setSearchCriteria] = useState('');

//callback to set search criteria
let getSearchCriteria = (crit) => {
  setSearchCriteria(crit);
};

  return (
    <div className="App">
      < Header/>
      < SearchBar getSearchCriteria= {getSearchCriteria}/>
      < FileDisplay searchCriteria={searchCriteria}/>
    </div>
  );
}

export default App;
