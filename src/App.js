import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
