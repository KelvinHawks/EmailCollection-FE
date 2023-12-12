import React from "react";
import Blogs from "../components/Blogs";
import "./BlogPage.css";
const DUMMY_DATA = [
  {
    id: 1,
    image:
      "https://rlo.acton.org/wp-content/uploads/2023/09/shutterstock_1878381073.jpg",
    header: `SENATE SURPORT RELIGIOUS INSTITUTIONS REGULATION
    FOLLOWING SHAKAHOLA DEATH`,
    pdf: "https://mycandidet.co.ke/Saturday9dec.pdf",
  },
];
function BlogPage() {
  return (
    <div className="blog-main_page">
      <Blogs data={DUMMY_DATA} />
    </div>
  );
}

export default BlogPage;
