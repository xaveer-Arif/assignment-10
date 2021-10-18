import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Service from "./Pages/Home/Service/Service";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path = '/'> 
            <Home></Home>
          </Route>
          <Route path = '/home'> 
            <Home></Home>
          </Route>
          <Route path = '/login'> 
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
