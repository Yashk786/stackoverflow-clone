import React from "react";
import "./RightSidebar.css";
import pen from "../assests/pen-solid.svg";
import comment from "../assests/comment-solid.svg";
import black from "../assests/blacklogo.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-side-div-1">
        <div className="right-side-div-2">
          <img src={pen} alt="pen" width={18} />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>

        <div className="right-side-div-2">
          <img src={pen} alt="pen" width={18} />
          <p>Podcast:374 How valuable is your screen name</p>
        </div>
      </div>
      <h4>Featued on Meta</h4>
      <div className="right-side-div-1">
        <div className="right-side-div-2">
          <img src={comment} alt="comment" width={18} />
          <p>Review Question workflows - FInal release...</p>
        </div>
        <div className="right-side-div-2">
          <img src={comment} alt="black" width={18} />
          <p>
            Reviewer overboard! Or a request to improve the onboarding guidance
            for new...
          </p>
        </div>
        <div className="right-side-div-2">
          <img src={black} alt="black" width={18} />
          <p>Should I explain other people's code-only answers?</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-side-div-1">
        <div className="right-side-div-2">
          <p>38</p>
          <p>
            Why was this spam flag declined yet.the question marked as spam?
          </p>
        </div>
        <div className="right-side-div-2">
          <p>20</p>
          <p>
            What is the best course of action when user has high enough rep to..
          </p>
        </div>
        <div className="right-side-div-2">
          <p>50</p>
          <p>Is a link to the "How to ask" helppage a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
