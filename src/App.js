import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// import Navbar from "./components/Navbar"
import ShipsList from "./components/ShipsList"
// import EditShips from "./components/EditShips"
// import CreateShips from "./components/CreateShips"
// import CreateUser from "./components/CreateUser"

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/" exact component={ShipsList} />
      {/* <Route path="/edit/:id" exact component={EditShips} />
      <Route path="/create" exact component={CreateShips} />
      <Route path="/user" exact component={CreateUser} /> */}
    </Router>
  );
}

export default App;
