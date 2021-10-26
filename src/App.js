import React,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import SingleNotePage from "./pages/SingleNotePage";
import './App.css';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className = { darkMode ? "dark-mode" : "light-mode"}>
      <div className = "container">
        <div className="app">
          <div className="app-header">
            <Header/>
            <div className="app-toggle">
              <input type="checkbox" id="switch" onChange={() => setDarkMode(!darkMode)}/>
              <label for="switch">Toggle</label>
            </div>
        </div>
          <Route component={NotesPage} exact path="/" />
          <Route component={SingleNotePage} path="/note/:id" />
          </div>
    </div>
    </div>
      </Router>
  );
}

export default App;
