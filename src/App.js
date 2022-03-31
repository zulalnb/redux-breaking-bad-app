import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
