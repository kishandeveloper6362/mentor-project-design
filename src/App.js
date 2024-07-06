import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Home component/Header';
import Footer from './Home component/Footer';

import Home from './Pages/Home';
import Coursf from './Course component/Coursf'
import Trainerrs from './Pages/Trainerrs';
import Events from './Event component/Events';
import Cnt from './Contact component/Cnt';
import Abotus from './Pages/Abotus';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Course">
            <Coursf />
          </Route>

          <Route path="/Trainers">
            <Trainerrs />
          </Route>

          <Route path="/Event">
            <Events />
          </Route>

          <Route path="/Contact">
            <Cnt />
          </Route>

          <Route path="/about">
            <Abotus />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
