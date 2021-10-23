import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import SingleNotePage from "./pages/SingleNotePage";
import './App.css';


function App() {
  return (
    <Router>
      <div className = "container dark">
        <div className="app">
        <Header />
        <Route component={NotesPage} exact path="/" />
        <Route component={SingleNotePage} path="/note/:id" />
    </div>
    </div>
      </Router>
  );
}

export default App;
