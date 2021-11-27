import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/pages/Dashboard";
import CardView from "./components/pages/CardView";
import CategoryTable from "./components/pages/CategoryTable";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "../node_modules/react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:cardId" element={<CategoryTable />} />
          <Route path="/package/:cardId" element={<CardView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
