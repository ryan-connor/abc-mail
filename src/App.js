import {React, useState} from 'react';
import './App.css';
import Header from './components/Header';
// import SingleFile from './components/SingleFile';
import FileDisplay from './components/FileDisplay';
import SearchBar from './components/SearchBar';
// import TextFileDisplay from './components/TextFileDisplay';




function App() {


let [searchCriteria, setSearchCriteria] = useState('');

let getSearchCriteria = (crit) => {
  setSearchCriteria(crit);
  console.log(crit);
};



  return (
    <div className="App">
      < Header/>
      < SearchBar getSearchCriteria= {getSearchCriteria}/>
      < FileDisplay searchCriteria={searchCriteria}/>
      {/* < TextFileDisplay /> */}

    </div>
  );
}

export default App;
