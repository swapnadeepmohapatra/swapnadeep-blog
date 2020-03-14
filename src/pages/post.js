import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { getFirebase } from "../firebase";

const Post = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  const slug = match.params.slug;
  const postSlugs = ["my-first-blog-post", "my-second-blog-post"];

  const postDoesNotExist = postSlugs.indexOf(slug) === -1;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   }

  //   if (loading) {
  //     console.log("doing some shit");

  //     getFirebase()
  //       .database()
  //       .ref()
  //       .child(`/posts/${slug}`)
  //       .once("value")
  //       .then(snapshot => {
  //         if (snapshot.val()) {
  //           setCurrentPost(snapshot.val());
  //           console.log(snapshot.val());
  //         }
  //         setLoading(false);
  //       });
  //   }

  return (
    // <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}>
    //   <h1>{currentPost.title}</h1>
    //   <em>{currentPost.datePretty}</em>
    //   <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
    // </img>
    <h2 style={{ color: "#ffffff" }}>We are working on this page</h2>
  );
};

export default Post;
