import {Switch,Route} from 'react-router-dom'
import NavBar from './comps/Nav/navBar.js'
import Home from './comps/Pages/home'
import Projects from './comps/Pages/projects.js';

/*
  BrowserRoute to use react route
  Route to make the route to the links of URL
  switch to organize what will be show
*/
function App() {
  return (
    <>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
    </>
  );
}

export default App;
