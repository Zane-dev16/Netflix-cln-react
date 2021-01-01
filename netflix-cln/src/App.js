import './App.css';
import Row from './Row.js'
import requests from './requests.js';

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div >
  );
}

export default App;
