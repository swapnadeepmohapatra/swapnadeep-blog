import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostThumbnail from "../components/PostThumbnail";

import { getFirebase } from "../firebase";

function Home() {
  const [loading, setLoading] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("date")
      .once("value")
      .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }

        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }

  if (loading) {
    return <h1 style={{ color: "#e3e3e4" }}>Loading...</h1>;
  }

  return (
    <>
      <h1 style={{ color: "#e3e3e4" }}>Blog posts</h1>
      <div className="containerMainDiv">
        {blogPosts.map(blogPost => (
          <PostThumbnail blogInfo={blogPost} />
        ))}
      </div>
    </>
  );
}

export default Home;

// <section key={blogPost.slug} className="card">
//   <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
//   <div className="card-content">
//     <h2>{blogPost.title} &mdash; </h2>
//     <span style={{ color: "#c1c1c1" }}>{blogPost.datePretty}</span>
//     <p
//       style={{ color: "#EDEBED", fontSize: 22 }}
//       dangerouslySetInnerHTML={{
//         __html: `${blogPost.content.substring(0, 200)}...`
//       }}
//     ></p>
//     <Link className="linkToViewPage" to={`/${blogPost.slug}`}>
//       Continue reading...
//     </Link>
//   </div>
//   <div className="blankSpaceDiv"></div>
// </section>
