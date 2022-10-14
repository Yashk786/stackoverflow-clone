import React from "react";
import "./RightSidebar.css";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "javascript",
    "mern-stack",
    "react-js",
    "angular-js",
    "java",
    "html5",
    "firebase",
    "mongodb",
  ];
  return (
    <div className="widget-tags">
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
