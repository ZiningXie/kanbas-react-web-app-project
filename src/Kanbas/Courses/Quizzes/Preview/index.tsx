// import React from "react";
// import { CAlert } from "@coreui/react";
// import { cilWarning } from "@coreui/icons";
// import CIcon from "@coreui/icons-react";
// import { FaCaretRight } from "react-icons/fa";
// import { SlQuestion } from "react-icons/sl";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// // Type declarations for your Redux state and actions would go here
// // import { fetchQuestions, setAnswer, submitQuiz } from './quizActions';

// const QuizPreview: React.FC = () => {
//   // Here you would normally call useSelector to access your Redux state
//   // const quiz = useSelector((state: AppState) => state.quiz);

//   // Dummy quiz data
//   const quiz = {
//     item_name: "Example Quiz",
//     available_from_date: new Date().toISOString(),
//     questions: [
//       {
//         _id: "q1",
//         title: "Question 1 Title",
//         questionText: "This is question 1 text",
//         questionType: "M",
//         points: 5,
//         possibleAnswers: ["Answer 1", "Answer 2", "Answer 3"],
//         previewAnswer: "",
//       },
//       // More questions...
//     ],
//   };

//   // Dummy function to replace useDispatch actions
//   const handleAnswerChange = (index: number, answer: string) => {
//     console.log(`Answer for question ${index} changed to: ${answer}`);
//   };

//   const handleSubmit = () => {
//     console.log("Submit quiz");
//     // Dispatch submitQuiz action
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ marginTop: "20px", marginLeft: "25px", marginRight: "20px" }}
//     >
//       <h1>{quiz.item_name}</h1>
//       <CAlert color="danger" className="d-flex align-items-center">
//         <CIcon
//           icon={cilWarning}
//           className="flex-shrink-0 me-2"
//           width={24}
//           height={24}
//         />
//         <div>This is a preview of the published version of the quiz</div>
//       </CAlert>

//       {/* ... rest of the component follows your provided structure ... */}

//       {/* Assuming you're mapping over questions like in your provided code */}
//       {quiz.questions.map((question, index) => (
//         <div
//           key={question._id}
//           className="card"
//           style={{ marginBottom: "20px" }}
//         >
//           {/* Question header and body as per your provided structure */}
//         </div>
//       ))}

//       {/* Submit button and "Keep Editing" link */}
//       <div className="card-body text-end">
//         <a role="button" className="btn btn-light" onClick={handleSubmit}>
//           Submit Quiz <FaCaretRight />
//         </a>
//       </div>
//       <Link to={`/edit-quiz/${quiz.item_name}`} className="btn btn-light">
//         {/* < style={{ marginRight: "5px" }} /> */}
//         Keep Editing This Quiz
//       </Link>

//       {/* Question navigation at the bottom */}
//       <div>
//         <h4 className="mt-3 ms-3">Questions</h4>
//         {quiz.questions.map((question, index) => (
//           <div key={question._id} className="mt-1 ms-4 list-group-item">
//             <SlQuestion className="me-1" />
//             <span>Question {index + 1}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuizPreview;

// function QuizPreview() {
//   return (
//     <div>
//       <h1>Quiz Preview</h1>
//     </div>
//   );
// }
// export default QuizPreview;

// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { KanbasState } from "../../../store";
// import { setQuiz } from "../quizzesReducer"; // Only import necessary actions
// import { useEffect, useState } from "react";
// import * as client from "../client";
// import * as clientProfile from "../../../../Users/client";

// function QuizPreview() {
//   const [question, setQuestion] = useState<any>({});
//   const [profile, setProfile] = useState();
//   const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
//   const quizId = useParams().quizId;
//   const questionIndex = useParams().qIndex?.toString() || "0";
//   const courseId = useParams().courseId;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     clientProfile
//       .profile()
//       .then((account) => {
//         setProfile(account);
//       })
//       .catch((error) => {
//         // Handle errors, if any
//         console.error("Error fetching profile:");
//       });

//     client.findQuizById(quizId).then((q: any) => {
//       dispatch(setQuiz(q));
//       setQuestion(q.questions[parseInt(questionIndex)] || {}); // Set default value to prevent errors
//     });
//     clientProfile.profile().then((account) => {
//       setProfile(account);
//     });
//   }, [quizId, questionIndex]);

//   useEffect(() => {
//     // Check if profile is already available
//     if (profile === null) {
//       navigate("/Kanbas/Account/Signin");
//     } else if (profile === undefined) {
//       // If profile is still being fetched, wait for it to resolve
//       clientProfile
//         .profile()
//         .then((account) => {
//           setProfile(account);
//         })
//         .catch((error) => {
//           // Handle errors, if any
//           navigate("/Kanbas/Account/Signin");
//         });
//     }
//   }, [profile, navigate]);
//   return (
//     <div>
//       {quiz.questions.length > 0 && (
//         <div
//           className="container"
//           style={{ display: "flex", flexWrap: "wrap" }}
//         >
//           <div className="main-content">
//             <h2 style={{ marginBottom: "15px" }}>{quiz.title}</h2>
//             <div className="full-length-text-box">
//               <i
//                 className="fa fa-info-circle"
//                 aria-hidden="true"
//                 style={{ color: "rgb(171, 11, 11)" }}
//               ></i>{" "}
//               This is a preview of the published version of the quiz.
//             </div>
//             <p style={{ marginBottom: "5px" }}>Started: Nov 29 12:00 AM</p>
//             <h2>Quiz Instructions</h2>
//             <hr />
//             <div className="grey-border question-box-margin">
//               <div
//                 className="transparent-grey-background grey-border-bottom "
//                 style={{ display: "flex" }}
//               >
//                 <h4>{question.title}</h4>
//                 <div style={{ marginLeft: "auto", color: "grey" }}>
//                   {question.points} pts
//                 </div>
//               </div>
//               <div className="question-box">
//                 <p style={{ marginBottom: "28px" }}>{question.question}</p>
//                 <hr className="hr-margin" />
//                 {question.questionType === "multipleChoice" && (
//                   <div>
//                     {question.choices.map((choice: any, index: number) => (
//                       <div key={index}>
//                         <input
//                           type="radio"
//                           id={index.toString()}
//                           name="choice"
//                           value={choice.text}
//                         />
//                         <label htmlFor={index.toString()}>
//                           &nbsp; {choice.text}{" "}
//                         </label>
//                         {index != question.choices.length - 1 && (
//                           <hr className="hr-margin" />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {question.questionType === "trueFalse" && (
//                   <div>
//                     <input
//                       type="radio"
//                       id="true"
//                       name="choicetrue"
//                       value="true"
//                     />
//                     <label htmlFor="true">&nbsp; True </label>
//                     <hr className="hr-margin" />
//                     <input
//                       type="radio"
//                       id="false"
//                       name="choicefalse"
//                       value="false"
//                     />
//                     <label htmlFor="false">&nbsp; False </label>
//                   </div>
//                 )}
//                 {question.questionType === "fillInBlanks" && (
//                   <div>
//                     {question.blanks.map((blank: any, index: number) => (
//                       <div key={index}>
//                         <label htmlFor={index.toString()}>{blank.blank}</label>
//                         &nbsp;
//                         <input type="text" id={index.toString()} name="blank" />
//                         {index != question.blanks.length - 1 && (
//                           <hr className="hr-margin" />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div
//               style={{
//                 marginRight: "42px",
//                 marginLeft: "42px",
//                 overflow: "hidden",
//               }}
//             >
//               {parseInt(questionIndex) != 0 && (
//                 <Link
//                   to={`/Kanbas/Courses/${courseId}/Quizzes/${
//                     quiz._id
//                   }/Preview/${parseInt(questionIndex) - 1}`}
//                 >
//                   {" "}
//                   <button className="btn btn-light">
//                     <i className="fa fa-caret-left" aria-hidden="true"></i>{" "}
//                     Previous
//                   </button>
//                 </Link>
//               )}
//               {parseInt(questionIndex) != quiz.questions.length - 1 && (
//                 <Link
//                   to={`/Kanbas/Courses/${courseId}/Quizzes/${
//                     quiz._id
//                   }/Preview/${parseInt(questionIndex) + 1}`}
//                 >
//                   {" "}
//                   <button className="btn btn-light float-end">
//                     Next{" "}
//                     <i className="fa fa-caret-right" aria-hidden="true"></i>
//                   </button>
//                 </Link>
//               )}
//             </div>
//             <div
//               className="grey-border"
//               style={{ padding: "10px", marginTop: "35px", display: "flex" }}
//             >
//               <div
//                 style={{
//                   marginLeft: "auto",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <p
//                   className="float-end"
//                   style={{
//                     paddingTop: "5px",
//                     marginBottom: "10px",
//                     marginRight: "10px",
//                   }}
//                 >
//                   Quiz saved at 12:00 am
//                 </p>
//                 <button className="btn btn-light">Submit Quiz</button>
//               </div>
//             </div>
//             <Link className="react-router-link" to={`#`}>
//               <div
//                 className="grey-border transparent-grey-background"
//                 style={{
//                   padding: "10px",
//                   marginTop: "35px",
//                   color: "grey",
//                   textDecoration: "none",
//                 }}
//               >
//                 <i className="fa fa-pencil" aria-hidden="true"></i> Keep Editing
//                 This Quiz
//               </div>
//             </Link>
//           </div>
//           <div className="question-menu">
//             <h3>Questions</h3>
//             <ul>
//               {quiz.questions.map((q: any, index: number) => (
//                 <li key={index}>
//                   <i className="fa fa-question-circle-o" aria-hidden="true"></i>
//                   <Link
//                     to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Preview/${index}`}
//                     className={
//                       parseInt(questionIndex) === index
//                         ? "selected-question react-router-link"
//                         : "react-router-link"
//                     }
//                     style={{ color: "rgb(140, 2, 2)" }}
//                   >
//                     {" "}
//                     {q.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//       {quiz.questions.length === 0 && (
//         <div>
//           <p>No questions found</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default QuizPreview;
// function QuizPreview(){

//     return (
//         <div>
//             <h1>Quiz Preview</h1>
//         </div>
//     )
// }
// export default QuizPreview;

import React from "react";
import { CAlert } from "@coreui/react";
//import { cilUser } from '@coreui/icons-react';
import { cilWarning } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { FaCaretRight } from "react-icons/fa";
import { SlQuestion } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Type declarations for your Redux state and actions would go here
// import { fetchQuestions, setAnswer, submitQuiz } from './quizActions';

const QuizPreview: React.FC = () => {
  // Here you would normally call useSelector to access your Redux state
  // const quiz = useSelector((state: AppState) => state.quiz);

  // Dummy quiz data
  const quiz = {
    item_name: "Example Quiz",
    available_from_date: new Date().toISOString(),
    questions: [
      {
        _id: "q1",
        title: "Question 1 Title",
        questionText: "This is question 1 text",
        questionType: "M",
        points: 5,
        possibleAnswers: ["Answer 1", "Answer 2", "Answer 3"],
        previewAnswer: "",
      },
      // More questions...
    ],
  };

  // Dummy function to replace useDispatch actions
  const handleAnswerChange = (index: number, answer: string) => {
    console.log(`Answer for question ${index} changed to: ${answer}`);
  };

  const handleSubmit = () => {
    console.log("Submit quiz");
    // Dispatch submitQuiz action
  };

  return (
    <div
      className="container-fluid"
      style={{ marginTop: "20px", marginLeft: "25px", marginRight: "20px" }}
    >
      <h1>{quiz.item_name}</h1>
      <CAlert color="danger" className="d-flex align-items-center">
        <CIcon
          icon={cilWarning}
          className="flex-shrink-0 me-2"
          width={24}
          height={24}
        />
        <div>This is a preview of the published version of the quiz</div>
      </CAlert>

      {/* ... rest of the component follows your provided structure ... */}

      {/* Assuming you're mapping over questions like in your provided code */}
      {quiz.questions.map((question, index) => (
        <div
          key={question._id}
          className="card"
          style={{ marginBottom: "20px" }}
        >
          {/* Question header and body as per your provided structure */}
        </div>
      ))}

      {/* Submit button and "Keep Editing" link */}
      <div className="card-body text-end">
        <a role="button" className="btn btn-light" onClick={handleSubmit}>
          Submit Quiz <FaCaretRight />
        </a>
      </div>
      <Link to={`/edit-quiz/${quiz.item_name}`} className="btn btn-light">
        {/* < style={{ marginRight: "5px" }} /> */}
        Keep Editing This Quiz
      </Link>

      {/* Question navigation at the bottom */}
      <div>
        <h4 className="mt-3 ms-3">Questions</h4>
        {quiz.questions.map((question, index) => (
          <div key={question._id} className="mt-1 ms-4 list-group-item">
            <SlQuestion className="me-1" />
            <span>Question {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPreview;
