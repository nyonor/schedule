import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  userParams
} from "react-router-dom";

function App() {
  return (<Router>
    <Switch>
      <Route path='/'>
        Public content.
        Authorized only content!!!
      </Route>
    </Switch>
  </Router>);
}

export default App;
