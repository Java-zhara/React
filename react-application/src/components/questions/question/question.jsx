import React from "react";

import "./question.css";

export const Question = ({
  title,
  description,
  activeIndexQuestion,
  curretIndex,
  setActiveQuestion,
}) => (
  <div className="question">
    <button
      className="question-header"
      onClick={() => setActiveQuestion(curretIndex)}
    >
      {title}
    </button>
    {activeIndexQuestion === curretIndex && (
      <div className="question-description">{description}</div>
    )}
  </div>
);
