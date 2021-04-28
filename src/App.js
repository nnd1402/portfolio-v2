import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'

function App() {
  return (
    <Router basename ="/portfolio-v2">
      <Switch>
        <Route path={["/", "/home"]} component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
