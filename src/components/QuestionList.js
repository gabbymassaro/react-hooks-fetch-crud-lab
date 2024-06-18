import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ onHandleDelete, questions, setQuestions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteItem={onHandleDelete}
            questions={questions}
            setQuestions={setQuestions}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
