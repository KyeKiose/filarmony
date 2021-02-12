import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { React, Component } from 'react';
import { connect } from 'react-redux';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Components/Home';
import {About} from './Components/About';
import {Afisha} from './Components/Afisha';
import {Artists} from './Components/Artists';
import {Contacts} from './Components/Contacts';


class App extends Component{
  render () {
    return(
    <>
    <Router>
    <NaviBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/afisha" component={Afisha} />
      <Route path="/artists" component={Artists} />
      <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
    <Footer />
    </>
    );
  }
}
export default App;