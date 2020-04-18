import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// -------------------------- Components
import Home from "./pages/Home";
import AfterEntry from "./pages/AfterEntry";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={AfterEntry} />
      </Router>
    </React.Fragment>
  );
}

export default App;
