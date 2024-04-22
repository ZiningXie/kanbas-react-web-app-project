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

// export default function FillInBlank() {
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
//               Fill In the Blank
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

interface BlanksProps {
  onSave: (newQuestion: any) => void;
  onUpdate: (updatedQuestion: any) => void;
  onCancel: () => void;
  question?: any;
}

function Blanks({ onSave, onUpdate, onCancel, question }: BlanksProps) {
  const [questionTitle, setQuestionTitle] = useState("");
  const [points, setPoints] = useState(1);
  const [questionContent, setQuestionContent] = useState("");
  const [blanks, setBlanks] = useState([{ answer: "" }]); // Each blank has one answer

  useEffect(() => {
    if (question) {
      setQuestionTitle(question.title);
      setPoints(question.points);
      setQuestionContent(question.question_content);
      setBlanks(question.answers.map((a: any) => ({ answer: a.content })));
    }
  }, [question]);

  const handleTitleChange = (e: any) => {
    setQuestionTitle(e.target.value);
  };

  const handlePointsChange = (e: any) => {
    setPoints(e.target.value);
  };

  const handleQuestionChange = (e: string) => {
    setQuestionContent(e);
  };

  const handleAnswerChange = (index: number, e: any) => {
    const newBlanks = [...blanks];
    newBlanks[index].answer = e.target.value;
    setBlanks(newBlanks);
  };

  const addBlank = () => {
    setBlanks([...blanks, { answer: "" }]);
  };

  const removeBlank = (index: number) => {
    const newBlanks = blanks.filter((_, i) => i !== index);
    setBlanks(newBlanks);
  };

  const handleSave = () => {
    if (blanks.length === 0) {
      alert("Please add at least one blank.");
      return;
    }
    if (blanks.some((blank) => blank.answer === "")) {
      alert("Please fill in all blanks or remove empty blanks.");
      return;
    }
    if (question) {
      const updatedQuestion = {
        _id: question._id,
        title: questionTitle,
        points: points,
        question_content: questionContent,
        answers: blanks.map((blank) => ({ content: blank.answer })),
        type: "FILL IN BLANKS",
      };
      onUpdate(updatedQuestion);
      console.log("Updated", updatedQuestion);
    } else {
      const newQuestion = {
        title: questionTitle,
        points: points,
        question_content: questionContent,
        answers: blanks.map((blank) => ({ content: blank.answer })),
        type: "FILL IN BLANKS",
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
      <h3>Fill in the Blanks Question Editor</h3>
      <div>
        <input
          className="me-2"
          type="text"
          placeholder="Question Title"
          value={questionTitle}
          onChange={handleTitleChange}
        />
        <input
          className="float-end"
          type="number"
          placeholder="Points"
          value={points}
          onChange={handlePointsChange}
        />
        <label className="float-end me-2" htmlFor="Points">
          Points:
        </label>
      </div>
      <hr />
      <div>
        <h6>
          Enter your question text with blanks, then define correct answers for
          each blank. <br /> Students will see the question followed by a small
          text box to type their answer. <br /> Example questions with their
          corresponding blanks:
          <br />2 + 2 = __1__
          <br />4 + 4 = __2__
        </h6>
        <h5>Question:</h5>
        <Editor
          apiKey="e1ioznczok5yus73u6oqwh6dbb6gszw6rln4i87qmz9y4hc2"
          value={questionContent}
          onEditorChange={handleQuestionChange}
        />
        <br />
        <h5>Answers:</h5>
        {blanks.map((blank, index) => (
          <div key={index}>
            <label>{`Answer for Blank ${index + 1}: `}</label>
            <input
              className="ms-2 me-2"
              type="text"
              value={blank.answer}
              onChange={(e) => handleAnswerChange(index, e)}
              placeholder="Enter a correct answer"
            />
            <button
              className="btn btn-danger mb-2"
              onClick={() => removeBlank(index)}
            >
              Remove Blank
            </button>
          </div>
        ))}
        <button className="btn btn-primary mb-2" onClick={addBlank}>
          Add Blank
        </button>
        <br />
        <button className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-success" onClick={handleSave}>
          Update Question
        </button>
      </div>
    </div>
  );
}

export default Blanks;
