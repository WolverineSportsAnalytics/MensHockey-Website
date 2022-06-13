import './App.css';
import Error from './components/Error.js';
import { Routes, Route } from 'react-router-dom';
import Overview from './components/overview/Overview.js';
import Predictions from './components/predictions/Predictions.js';

document.title = "WSA - NCAA Hockey Analytics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overview />}/>
        <Route path="/overview" element={<Overview />}/>
        <Route path="/predictions" element={<Predictions />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
