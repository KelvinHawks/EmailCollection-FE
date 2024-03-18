import React from "react";

import "./Blogs.css";
import BlogItem from "./BlogItem";
function Blogs(props) {
  return (
    <div className="cardList">
      <ul>
        {props.data.map((blog) => {
          return (
            <BlogItem
              key={blog.id}
              image={blog.image}
              header={blog.header}
              paragraph={blog.paragraph}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Blogs;
