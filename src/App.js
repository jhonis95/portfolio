import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './comps/Nav/navBar.js'
import Home from './comps/Pages/home'

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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
