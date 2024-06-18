import React from "react";

function QuestionItem({ question, onDeleteItem, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(id));
  }

  function updateCorrectIndex(data) {
    let updatedQuestions = questions.map((question) => {
      if (question.id === data.id) {
        return data
      } else {
        return question
      }
    })

    setQuestions(updatedQuestions)
  }

  function onChangeCorrect(event) {
    console.log(event.target.value)

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "correctIndex": event.target.value
      }),
    })
      .then((r) => r.json())
      .then((data) => updateCorrectIndex(data));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={onChangeCorrect}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
