import './App.css';
import NavBar from "./navbar/NavBar";
import Employees from "./employees/Employee";
import Roles from "./roles/Roles";
import Organisations from "./organisation/Organisations";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import "./style.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/employees" exact component={Employees}/>
          <Route path="/roles" exact component={Roles}/>
          <Route path="/organisations" exact component={Organisations}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
