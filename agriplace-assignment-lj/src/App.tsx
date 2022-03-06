import React from "react";
import "./App.css";
import QnaAddComponent from "./components/qna-add/qna-add.component";
import QnaListComponent from "./components/qna-list/qna-list.component";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">The Awesome Q&A Tool</header>

      <QnaListComponent />

      <QnaAddComponent />
    </div>
  );
}
