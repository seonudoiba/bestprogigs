import './App.css';

import Error  from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'
import Practice from './pages/Practice';

import {Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/practice/" component={Practice} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route path="*" component={Error} />
    </Switch>
    </>
    
  );
}

export default App;
