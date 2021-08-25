import Header from './components/style'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu/menu'
import Thank from './components/thankYou/thank'

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/checkout" component={Thank} />
    {/* <div className="App">      
    <Header />
    <Menu/>
    <Thank/>    
    </div> */}
    </Switch>
    </Router>
    </>
  );
}

export default App;
