// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "../index.css";
// import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
// import { Dropdown } from "react-bootstrap";

// export interface Answer {
//   answerId: string;
//   text: string;
//   questionId: string;
// }

// export interface QuestionEditorState {
//   questionId: string;
//   title: string;
//   points: number;
//   questionText: string;
//   possibleAnswers: Answer[];
//   correctAnswer: string; //"true" or "false"
//   questionType: string; //M for multiple choice, T for true/false, B for fill in the blank
//   quizId: string;
// }

// export default function MultipleChoiceQuestionEditor() {
//   const [state, setState] = useState<QuestionEditorState>({
//     questionId: "question111",
//     title: "",
//     points: 1,
//     questionText: "",
//     possibleAnswers: [
//       { answerId: "a1", text: "Example anwser 1", questionId: "question111" },
//       { answerId: "a2", text: "Example answer 2", questionId: "question111" },
//     ],
//     correctAnswer: "",
//     questionType: "M",
//     quizId: "quiz1",
//   });
//   const handleAnswerChange = (text: any, index: any) => {
//     const newAnswers = [...state.possibleAnswers];
//     newAnswers[index].text = text;
//     setState({ ...state, possibleAnswers: newAnswers });
//   };

//   const handleSelectCorrectAnswer = (id: any) => {
//     setState({ ...state, correctAnswer: id });
//   };

//   const handleRemoveAnswer = (index: any) => {
//     const newAnswers = [...state.possibleAnswers];
//     newAnswers.splice(index, 1);
//     setState({ ...state, possibleAnswers: newAnswers });
//   };

//   return (
//     <div className="container-fluid me-3 ms-3">
//       {/* Row for Title and Points */}
//       <div className="row pt-3">
//         <div className="col-4">
//           <input
//             className="form-control"
//             type="text"
//             value={state.title}
//             onChange={() => {}}
//             placeholder="Question Title"
//           />
//         </div>
//         <div className="col-4">
//           <Dropdown>
//             <Dropdown.Toggle variant="light" id="dropdown-basic">
//               Multiple choice
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">Multiple choice</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">True/False</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">
//                 Fill in the Blank{" "}
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>

//         <div className="col-3 d-inline-flex align-items-center">
//           <span className="fs-5 me-2">pts:</span>
//           <input
//             className="form-control"
//             type="number"
//             value={state.points}
//             onChange={() => {}}
//             placeholder="Points"
//             style={{ width: "auto" }}
//           />
//         </div>
//       </div>
//       <hr />
//       <h5 className="text-muted-question">
//         Enter your question and multiple answers, then select the one correct
//         answer
//       </h5>

//       <b>Question:</b>
//       <h5 className="text-muted-question">
//         Edit &nbsp; View &nbsp; Insert &nbsp; Format &nbsp; Tools &nbsp;
//         Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100%
//       </h5>

//       <div className="row pt-3">
//         <div className="col">
//           <ReactQuill
//             className="custom-quill form-control"
//             id="myCustomQuillEditorQuestion"
//             value={state.questionText}
//             onChange={() => {}}
//             placeholder="Enter your question text here..."
//           />
//         </div>
//       </div>

//       <div className="row pt-3">
//         <strong>Answers:</strong>
//         <div className="col-6 input-group mb-3">
//           <span>Correct Answer:</span>
//           <input
//             className="form-control mb-3"
//             type="text"
//             value={state.correctAnswer}
//             onChange={(e) =>
//               setState({ ...state, correctAnswer: e.target.value })
//             }
//             placeholder="3"
//           />
//         </div>

//         {state.possibleAnswers.map((answer, index) => (
//           <div key={answer.answerId} className="input-group mb-3">
//             <span>Possible Answer:</span>
//             <div className="input-group-text">
//               <input
//                 type="radio"
//                 name="correctAnswer"
//                 checked={state.correctAnswer === answer.answerId}
//                 onChange={() => handleSelectCorrectAnswer(answer.answerId)}
//               />
//             </div>
//             <input
//               className="form-control"
//               type="text"
//               value={answer.text}
//               onChange={(e) => handleAnswerChange(e.target.value, index)}
//               placeholder={`Possible Answer ${index + 1}`}
//             />

//             <button className="btn btn-outline-secondary" type="button">
//               <FaEdit />
//               Update
//             </button>
//             <button
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={() => handleRemoveAnswer(index)}
//             >
//               <FaTrash />
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div style={{ display: "flex", justifyContent: "flex-end" }}>
//         <button
//           className="btn btn-custom-red-addquestion"
//           type="button"
//           style={{ flex: "0 1 auto" }}
//           onClick={() => {}}
//         >
//           <FaPlus /> Add Another Answer
//         </button>
//       </div>

//       <div className="row pt-3">
//         <div className="col">
//           <button className="btn me-2" type="button" onClick={() => {}}>
//             Cancel
//           </button>
//           <button
//             className="btn"
//             type="button"
//             onClick={() => {}}
//             style={{ backgroundColor: "red", color: "white" }}
//           >
//             Update Question
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface Choice {
  text: string;
  _id?: string; // Optional, as new choices might not have an ID initially
}

interface MultipleChoiceProps {
  onSave: (newQuestion: any) => void;
  onUpdate: (updatedQuestion: any) => void;
  onCancel: () => void;
  question?: any;
}

function MultipleChoice({
  onSave,
  onUpdate,
  onCancel,
  question,
}: MultipleChoiceProps) {
  const [questionTitle, setQuestionTitle] = useState("");
  const [points, setPoints] = useState(1);
  const [questionContent, setQuestionContent] = useState("");
  const [choices, setChoices] = useState<Choice[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  useEffect(() => {
    if (question) {
      setQuestionTitle(question.title);
      setPoints(question.points);
      setQuestionContent(question.question_content);
      setChoices(question.choices.map((c: any) => ({ text: c.content })));
      setCorrectAnswer(question.answers[0].content);
    }
  }, [question]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionTitle(e.target.value);
  };

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(Number(e.target.value));
  };

  const handleQuestionChange = (content: string) => {
    setQuestionContent(content);
  };

  const handleChoiceTextChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChoices = [...choices];
    newChoices[index].text = e.target.value;
    setChoices(newChoices);
  };

  const handleCorrectAnswerChange = (choiceText: string) => {
    setCorrectAnswer(choiceText);
  };

  const addChoice = () => {
    setChoices([...choices, { text: "" }]);
  };

  const removeChoice = (index: number) => {
    const newChoices = choices.filter((_, i) => i !== index);
    setChoices(newChoices);
  };

  const handleSave = () => {
    if (choices.length === 0 || choices.some((choice) => choice.text === "")) {
      alert("Please add and fill in all choices.");
      return;
    }
    if (correctAnswer === "") {
      alert("Please select or add a correct answer.");
      return;
    }

    const isCorrectAnswerIncluded = choices.some(
      (choice) => choice.text === correctAnswer
    );
    if (!isCorrectAnswerIncluded) {
      alert("The correct answer must be one of the choices.");
      return;
    }

    if (question) {
      const updatedQuestion = {
        _id: question._id,
        title: questionTitle,
        points: points,
        question_content: questionContent,
        choices: choices.map((choice) => ({ content: choice.text })),
        answers: [{ content: correctAnswer }],
        type: "MULTIPLE CHOICES",
      };
      onUpdate(updatedQuestion);
      console.log("Updated", updatedQuestion);
    } else {
      const newQuestion = {
        title: questionTitle,
        points: points,
        question_content: questionContent,
        choices: choices.map((choice) => ({ content: choice.text })),
        answers: [{ content: correctAnswer }],
        type: "MULTIPLE CHOICES",
      };
      onSave(newQuestion);
      console.log("Saved", newQuestion);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <h3>Multiple Choice Question Editor</h3>
      <input
        type="text"
        placeholder="Question Title"
        value={questionTitle}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        className="float-end"
        placeholder="Points"
        value={points}
        onChange={handlePointsChange}
      />
      <label className="float-end me-2" htmlFor="Points">
        Points:
      </label>
      <hr />
      <h6>
        Enter your question and multiple answers, then select the one correct
        answer.
      </h6>
      <h5>Question:</h5>
      <Editor
        apiKey="e1ioznczok5yus73u6oqwh6dbb6gszw6rln4i87qmz9y4hc2"
        value={questionContent}
        onEditorChange={handleQuestionChange}
      />
      <br />
      {choices.map((choice, index) => (
        <div key={index}>
          <input
            type="text"
            value={choice.text}
            className="me-2"
            onChange={(e) => handleChoiceTextChange(index, e)}
            placeholder="Enter choice text"
          />
          <input
            type="radio"
            name="correctAnswer"
            checked={correctAnswer === choice.text}
            onChange={() => handleCorrectAnswerChange(choice.text)}
          />
          <label
            className="me-2"
            onClick={() => handleCorrectAnswerChange(choice.text)}
          >
            Set as correct choice
          </label>
          <button
            className="btn btn-danger mb-2"
            onClick={() => removeChoice(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button className="btn btn-primary mb-2" onClick={addChoice}>
        Add Choice
      </button>
      <br />
      <button className="btn btn-secondary me-2" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn btn-success" onClick={handleSave}>
        Update Question
      </button>
    </div>
  );
}

export default MultipleChoice;
