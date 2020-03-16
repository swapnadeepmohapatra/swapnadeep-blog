import React, { useState } from "react";
import { Link } from "react-router-dom";

class PostThumbnail extends React.Component {
  render() {
    const blogPost = this.props.blogInfo;
    return (
      <section key={blogPost.slug} className="card">
        <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
        <div className="card-content">
          <h2>{blogPost.title} </h2>
          <span style={{ color: "#c1c1c1" }}>
            {" "}
            &mdash; {blogPost.datePretty}
          </span>
          <p
            style={{ color: "#EDEBED", fontSize: 22 }}
            dangerouslySetInnerHTML={{
              __html: `${blogPost.content.substring(0, 200)}...`
            }}
          ></p>
          <Link className="linkToViewPage" to={`/${blogPost.slug}`}>
            Continue reading...
          </Link>
        </div>
        <div className="blankSpaceDiv"></div>
      </section>
    );
  }
}

export default PostThumbnail;
