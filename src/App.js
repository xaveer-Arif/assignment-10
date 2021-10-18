import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Service from "./Pages/Home/Service/Service";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path = '/'> 
            <Home></Home>
          </Route>
          <Route path = '/home'> 
            <Home></Home>
          </Route>
          <Route path = '/details/:serviceId'> 
            <Details></Details>
          </Route>

          <Route path = '/login'> 
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
