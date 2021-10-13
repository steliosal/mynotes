import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import SingleNotePage from "./pages/SingleNotePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route component={NotesPage} exact path="/" />
        <Route component={SingleNotePage} path="/note/:id" />
      </Router>
    </div>
  );
}

export default App;
