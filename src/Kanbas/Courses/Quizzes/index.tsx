import {
  FaEllipsisV,
  FaListUl,
  FaEdit,
  FaCheckCircle,
  FaRocket,
  FaBan,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { KanbasState } from "../../store";
import * as client from "./client";
import "./index.css";
import { useEffect, useState } from "react";
import {
  addQuiz,
  deleteQuiz,
  setQuizzes,
  updateQuiz,
  setQuiz,
} from "./quizzesReducer";
import { Dropdown } from "react-bootstrap";

function Quizzes() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizzes = useSelector(
    (state: KanbasState) => state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const quizList = quizzes.filter((quiz) => quiz.course === courseId);
  console.log(`quizzes`, quizzes);
  console.log("quizList:", quizList);
  const [published, setPublished] = useState(false);
  // get the availability of the quiz: available until, available from, closed
  const getAvailability = (quiz: any) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const { availableFrom, availableUntil } = quiz;
    if (currentDate < availableFrom) {
      return `Not available until ${availableFrom.toString().split("T")[0]}`;
    } else if (currentDate >= availableFrom && currentDate <= availableUntil) {
      return `Available until ${availableUntil.toString().split("T")[0]}`;
    } else {
      return "Closed";
    }
  };
  const handleAddQuiz = async () => {
    client.createQuiz(courseId!, quiz).then((quiz) => {
      dispatch(addQuiz({ ...quiz, course: courseId }));
      dispatch(setQuiz(quiz));
    });

    navigate(`/Kanbas/Courses/${courseId}/Quizzes/QuizzesDetails/${quiz.id}`);
  };
  const handleDelete = (quiz: any) => {
    client.deleteQuiz(quiz.id).then((status) => {
      dispatch(deleteQuiz(quiz.id));
      console.log("Deleting quiz:", quiz, "quizzes after deleting:", quizList);
    });
  };
  // change the published status of the quiz
  // and update it in the server and the react store
  const handlePublish = async (quiz: any) => {
    const updatedQuiz = { ...quiz, published: !quiz.published };
    //console.log('Publishing quiz:', quiz, 'quizzes before publishing:', quizList);
    const status = await client.updateQuiz(updatedQuiz);
    dispatch(updateQuiz(updatedQuiz));
  };
  useEffect(() => {
    client
      .findQuizzesForCourse(courseId!)
      .then((quizzes) => dispatch(setQuizzes(quizzes)));
  }, [courseId]);
  return (
    <>
      <div className="wd-assignment-buttons d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search For Quiz"
          style={{ width: 300 }}
        />
        <div className="ms-auto">
          {/*<button className="btn btn-outline-secondary ">+Group</button>*/}
          {/*navigate to the quizzesdetails page*/}

          <button
            className="btn btn-danger wd-redbutton "
            onClick={handleAddQuiz}
          >
            {" "}
            + Quiz
          </button>
          <button className="btn btn-outline-secondary ">
            <FaEllipsisV className="me-2" />
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="d-flex align-items-center wd-assignment-title">
            <FaEllipsisV className="me-2" /> AssignmentQuizzes
            <div className="ms-auto">
              {/*40% of Total with rounded border*/}
              {/*<span className="border rounded-pill px-2 py-1 me-2" >40% of Total</span> 
                <button className="btn btn-outline-secondary btn-sm me-2 wd-plusbutton">+</button>
                <FaEllipsisV />*/}
            </div>
          </div>
          <ul className="list-group">
            {quizList.map((quiz, index) => (
              <li key={index} className="list-group-item">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-auto text-center">
                      {/*icon for each quiz*/}
                      <FaRocket style={{ color: "green", fontSize: "25px" }} />
                    </div>
                    <div className="col-auto">
                      {" "}
                      {/*quiz content*/}
                      <div className="fw-bold">
                        {" "}
                        {/*1st line*/}
                        <Link
                          className="text-decoration-none"
                          style={{ color: "black" }}
                          to={`/Kanbas/Courses/${courseId}/Quizzes/QuizzesDetails/${quiz.id}`}
                        >
                          {quiz.title}
                        </Link>
                      </div>
                      <div>
                        <span className="text-muted">
                          {getAvailability(quiz)} | Due:{" "}
                          {quiz.due.toString().split("T")[0]}| {quiz.points} pts{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center ">
                      <button
                        className="wd-no-border-button"
                        onClick={() => handlePublish(quiz)}
                      >
                        {quiz.published ? (
                          <FaCheckCircle className="text-success" />
                        ) : (
                          <FaBan style={{ color: "grey" }} />
                        )}
                      </button>

                      <Dropdown>
                        <Dropdown.Toggle
                          className="wd-no-caret wd-no-border-button"
                          id="dropdown-basic"
                        >
                          <FaEllipsisV className="ms-2" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="text-center"
                            onClick={() =>
                              navigate(
                                `/Kanbas/Courses/${courseId}/Quizzes/${quiz.id}`
                              )
                            }
                          >
                            Edit
                            {/*<Link className="text-decoration-none" style={{color:"black"}} 
                                to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz.id}`}>Edit</Link>*/}
                          </Dropdown.Item>
                          <Dropdown.Item className="text-center">
                            <button
                              className="wd-no-border-button"
                              onClick={() => handleDelete(quiz)}
                            >
                              Delete
                            </button>
                            {/*<button className="btn btn-sm btn-danger wd-redbutton" onClick={() => handleDelete(quiz)} >Delete</button>*/}
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="text-center"
                            onClick={() => handlePublish(quiz)}
                          >
                            {quiz.published ? "Unpublish" : "Publish"}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Quizzes;
