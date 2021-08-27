
import './App.css';
import NavBar from './comps/navBar';
import Home from './comps/home';
import Projects from './comps/projects';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
/*
  BrowserRoute to use react route
  Route to make the route to the links of URL
  switch to organize what will be show
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
