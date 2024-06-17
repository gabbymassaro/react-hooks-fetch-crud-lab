import React, { useEffect, useState} from "react";
import QuestionItem from './QuestionItem'

function QuestionList( ) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => setQuestions(data))
  }, [])

  console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((item) => (
          <QuestionItem
            key={item.id}
            prompt={item.prompt}
            answers={item.answers}
            correctIndex={item.correctIndex}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
