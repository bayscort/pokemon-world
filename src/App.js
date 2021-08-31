
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages';
import About from './pages/about';
import Codex from './pages/codex';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/codex' component={Codex}/>
        <Route path='/contact-us' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
