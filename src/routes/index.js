import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./../components/LoginPage";

class Routes extends React.Component {
  render(){
    return <Router>
      <Route exact path='/' component={LoginPage} />
    </Router>;
  }
}

export default Routes;
