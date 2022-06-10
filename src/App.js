
import './App.css';
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
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
