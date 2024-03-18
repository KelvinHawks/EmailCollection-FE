import React, { useState } from "react";
import Card from "../../shared/UIelements/Card";
import "./BlogItem.css";

function BlogItem(props) {
  const [showFullText, setShowFullText] = useState(false);
  const toggleShowText = () => {
    setShowFullText(!showFullText);
  };
  let maxLength = 80;
  return (
    <li className="list_center">
      <Card className="card-item">
        <img src={props.image} alt="review" />
        <h4>{props.header.toUpperCase()}</h4>
        <div>
          {showFullText ? (
            <div>
              {props.paragraph}
              <span
                onClick={toggleShowText}
                style={{ color: "blue", cursor: "pointer" }}
              >
                {" "}
                See less
              </span>
            </div>
          ) : (
            <div>
              {props.paragraph.length > maxLength && (
                <div>
                  {props.paragraph.slice(0, maxLength)}
                  <span
                    onClick={toggleShowText}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {" "}
                    See More
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

export default BlogItem;
