import React, { useEffect, useState } from "react";
import "./qna-list.component.css";
import data from "../../data/data.json";

interface Data {
  id: number;
  question: string;
  answer: string;
  isAnswerVisible: boolean;
}

/**
 * Q&A List Component.
 */
export default function QnaListComponent() {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<Data[]>([]);

  useEffect(() => {
    const formattedData: Data[] = data.map((dataObj): Data => {
      return {
        id: dataObj.id,
        question: dataObj.question,
        answer: dataObj.answer,
        isAnswerVisible: false,
      };
    });

    setQuestionsAndAnswers(formattedData);
  }, []);

  /**
   * Shows an answer to a question when the question item is clicked.
   * @param itemId the ID of the clicked question item
   */
  const handleQuestionClick = (itemId: number): void => {
    const temp: Data[] = [...questionsAndAnswers];

    const itemIndex: number = temp.findIndex(
      (dataObj: Data) => dataObj.id === itemId
    );

    if (itemIndex >= 0) {
      temp[itemIndex].isAnswerVisible = true;
    }

    setQuestionsAndAnswers(temp);
  };

  /**
   * Sorts the questions in alphabetical order.
   */
  const sortQuestions = (): void => {
    const temp: Data[] = [...questionsAndAnswers];

    const sortedTemp: Data[] = temp.sort((tempItemA: Data, tempItemB: Data) => {
      if (tempItemA.question < tempItemB.question) {
        return -1;
      }

      if (tempItemA.question > tempItemB.question) {
        return 1;
      }

      return 0;
    });

    setQuestionsAndAnswers(sortedTemp);
  };

  /**
   * Deletes a Q&A item.
   * @param itemId the ID of the Q&A item being deleted
   */
  const deleteQuestion = (itemId: number) => {
    const temp: Data[] = [...questionsAndAnswers];

    const itemIndex: number = temp.findIndex(
      (dataObj: Data) => dataObj.id === itemId
    );

    if (itemIndex >= 0) {
      temp.splice(itemIndex, 1);
    }

    setQuestionsAndAnswers(temp);
  };

  /**
   * Deletes all Q&A items.
   */
  const removeAllQuestions = () => {
    setQuestionsAndAnswers([]);
  };

  return (
    <div className="qna-list-container">
      <p className="qna-list-header">Created Questions</p>

      <div className="qna-list-content">
        {questionsAndAnswers.map((question) => (
          <div key={question.id} className="qna-list-wrapper">
            <div className="qna-list-text">
              <p
                className="qna-list-question-text"
                onClick={() => handleQuestionClick(question.id)}
              >
                <b>Q:</b> {question.question}
              </p>
              {question.isAnswerVisible ? (
                <p>
                  <b>A:</b> {question.answer}
                </p>
              ) : null}
            </div>

            <div className="qna-list-buttons">
              <button style={{ marginRight: "5px" }} className="edit-button">
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteQuestion(question.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="qna-list-actions">
        <button
          style={{ marginRight: "10px" }}
          className="edit-button"
          onClick={() => sortQuestions()}
          disabled={questionsAndAnswers.length === 0}
        >
          Sort Questions
        </button>

        <button
          className="delete-button"
          onClick={() => removeAllQuestions()}
          disabled={questionsAndAnswers.length === 0}
        >
          Remove All Questions
        </button>
      </div>
    </div>
  );
}
