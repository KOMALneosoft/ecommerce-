
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import Shop from './components/Shop';
import Picnic from './components/Picnic';
import Promotion from './components/Promotion';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import Footers from './components/Footers';

function App() {
  return (
    <>
      <Router>
        {/* <Index/> */}
        <Navbar/>
        
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/picnic" exact component={Picnic}/>
          <Route path="/promotion" exact component={Promotion}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/contact" exact component={Contact}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
      <Footers/>
    </>
  );
}

export default App;
