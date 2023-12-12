import React from "react";
import Card from "../../shared/UIelements/Card";
import "./BlogItem.css";
import Button from "../../shared/components/formelements/Button";
function BlogItem(props) {
  return (
    <li className="list_center">
      <Card className="card-item">
        <img src={props.image} alt="review" />
        <h4>{props.header}</h4>
        <a href={props.pdf} download>
          <Button className="item_btn">DOWNLOAD PDF</Button>
        </a>
      </Card>
    </li>
  );
}

export default BlogItem;
