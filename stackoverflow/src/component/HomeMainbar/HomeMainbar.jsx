import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Questions from "../Pages/Questions/Questions";
import QuestionList from "./QuestionList";
import "./HomeMainbar.css";

const HomeMainbar = () => {
  let questionList = [
    {
      id: 1,
      votes: 2,
      noOfAnswer: 3,
      questionTitle: "What is a function",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "javascript", "c", "c++"],
      userPosted: "somesh",
      askedOn: "July15",
    },
    {
      id: 1,
      votes: 2,
      noOfAnswer: 3,
      questionTitle: "What is a function",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "javascript", "c", "c++"],
      userPosted: "somesh",
      askedOn: "July15",
    },
    {
      id: 1,
      votes: 2,
      noOfAnswer: 3,
      questionTitle: "What is a function",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "javascript", "c", "c++"],
      userPosted: "somesh",
      askedOn: "July15",
    },
  ];

  const location = useLocation();

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>TOP QUESTIONS</h1>
        ) : (
          <h1>ALL QUESTIONS</h1>
        )}
        <Link to="/AskQuestions" className="ask-btn">
          Ask Questions
        </Link>
      </div>
      <div>
        {questionList === null ? (
          <h1>Loading..</h1>
        ) : (
          <>
            <p>{questionList.length}questions</p>
            <QuestionList questionList={questionList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
