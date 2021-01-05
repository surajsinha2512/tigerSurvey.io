import logo from './logo.JPG';
import './App.css';
import {Button} from 'reactstrap';
import CreateSurvey from './components/create-survey';
import TakeSurvey from './components/take-survey';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    
         <div className="App">
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         </header>

          <Switch>
          <Route path="/create">
          
            <CreateSurvey/>
          </Route>
          <Route path="/take">
            Take Survey
          </Route>
          <Route path="/">
        <Link to="/create"><Button className="survey-main-btn" style={{backgroundColor:"#af5f46"}}>Create Survey</Button>{' '}</Link>
        <Link to="/take"><Button className="survey-main-btn" style={{backgroundColor:"#af5f46"}}>Take Survey</Button>{' '}</Link>
     
          </Route>
        </Switch>
      </div>
    </Router>
  
   
   
  );
}

export default App;
