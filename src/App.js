import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Homepage from './components/pages/Homepage';
import Products from './components/pages/Products';

//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Products' component={Products} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
