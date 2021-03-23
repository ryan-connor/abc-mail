import './App.css';
import Header from './components/Header';
// import SingleFile from './components/SingleFile';
import FileDisplay from './components/FileDisplay';
import SearchBar from './components/SearchBar';
import TextFileDisplay from './components/TextFileDisplay';




function App() {
  return (
    <div className="App">
      < Header/>
      {/* < SearchBar />
      < FileDisplay /> */}
      < TextFileDisplay />

    </div>
  );
}

export default App;
