import './App.css';
import { useState } from 'react';
import Search from './components/Search/Search';
import Headers from './components/Headers/Headers';
import Wheather from './components/Wheather/Wheather';
// import {Tester, TesterSub} from './components/Tester/Tester';

function App() {
  const [placeName, setPlaceName] = useState('tokyo');

  return (
    <div className="body">
      <Headers placeName={placeName} setPlaceName={setPlaceName}/> {/** default import  */}
      <Search placeName={placeName} setPlaceName={setPlaceName}/>
      <Wheather placeName={placeName} setPlaceName={setPlaceName}/>
      {/* <Tester /> {/** named import  */}
      {/* <TesterSub /> */}
    </div>
  );
}

export default App;
