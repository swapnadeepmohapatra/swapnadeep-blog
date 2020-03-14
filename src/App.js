import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Swapnadeep's Blog</h1>
//         <p>Site under construction</p>
//       </header>
//     </div>
//   );
// }

import Home from "./pages/home";
import Post from "./pages/post";
import NoMatch from "./pages/404";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>Swapnadeep's Blog</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
