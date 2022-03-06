import React, { useState } from "react";
import "./qna-add.component.css";

/**
 * Q&A Add Component.
 */
export default function QnaAddComponent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const updateQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const updateAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const addQuestion = () => {};

  return (
    <div className="qna-add-container">
      <p className="qna-add-header">Create a New Question</p>

      <p className="qna-add-subheader">Question</p>
      <textarea
        style={{ marginBottom: "20px" }}
        className="qna-add-textarea"
        value={question}
        onChange={updateQuestion}
      ></textarea>

      <p className="qna-add-subheader">Answer</p>
      <textarea
        style={{ marginBottom: "10px" }}
        className="qna-add-textarea"
        value={answer}
        onChange={updateAnswer}
      ></textarea>

      <button className="qna-add-button" onClick={() => addQuestion()}>
        Create Question
      </button>
    </div>
  );
}
