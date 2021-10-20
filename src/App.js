import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Pages/PrivateRouter/PrivateRouter";
import Footer from "./Pages/Shared/Footer/Footer";
import Departments from "./Pages/Departments/Departments";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import Button from "@restart/ui/esm/Button";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <div className = 'App'>
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
          <PrivateRoute path = '/departments'> 
            <Departments></Departments>
          </PrivateRoute>
          <PrivateRoute path = '/services'> 
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path = '/details/:serviceId'> 
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          

          <Route path = '/login'> 
            <Login></Login>
          </Route>
          <Route path = '/register'> 
            <Register></Register>
          </Route>
          <PrivateRoute path = '/about'> 
            <About></About>
          </PrivateRoute>
          <Route path = '*'> 
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
