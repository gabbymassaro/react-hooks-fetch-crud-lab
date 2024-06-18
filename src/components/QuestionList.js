import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ onHandleDelete, questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteItem={onHandleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
