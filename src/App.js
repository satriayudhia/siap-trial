import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import SimulasiDanaMobil from "./pages/SimulasiDanaMobil";
import ScrollToTop from "./configs/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/simulasi-dana-mobil" component={SimulasiDanaMobil} />
      </Switch>
    </Router>
  );
}

export default App;
