import './App.css';
import InputTopic from './components/report/inputTopic/InputTopic'
import Parameters from './components/report/parameters/Parameters'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
  <Router>
    <p>
      Hola mundo!!
    </p>
      <InputTopic/>
      <Routes>
        <Route path="/analysis" element={<Parameters/>}>
       </Route>
      </Routes>
    </Router>
  );
}

export default App;
