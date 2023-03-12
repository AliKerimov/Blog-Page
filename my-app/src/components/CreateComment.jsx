import React, { useEffect } from "react";
import { createcomment } from "../utils/crud";
import { Container, Create } from "../styles/createComment";
import { useState } from "react";
import { Link } from "react-router-dom";
const CreateComment = ({ postId, data }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    postId: 0,
    email: "",
  });
  const [bool,setBool]=useState(false)
  useEffect(() => {
    if(bool){
        window.location.reload();
    }
  }, [bool]);
  return postId === undefined ? (
    <h1 style={{ margin: "10%" }}>loading</h1>
  ) : (
    <Container>
      <div>
        <h1>Add a comment</h1>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            value={post.email}
            onChange={(event) =>
              setPost({ ...post, email: event.target.value, postId: postId })
            }
            type="email"
          />
        </div>
        <div>
          <label htmlFor="">Title</label>
          <br />
          <input
            value={post.title}
            onChange={(event) =>
              setPost({ ...post, title: event.target.value })
            }
            type="text"
          />
        </div>
        <div>
          <div>
            <label htmlFor="">Body</label>
            <br />
            <textarea
              value={post.body}
              onChange={(event) =>
                setPost({ ...post, body: event.target.value })
              }
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <Link to={`/posts/${postId}?_embed=comments`}>
          <Create
            onClick={() => {
              createcomment(post)
                .then((bool) => {
                  setPost({ body: "", title: "", email: "" });
                  setBool(true)
                })
                .catch((error) => {
                  return;
                });
            }}
          >
            Create
          </Create>
        </Link>
      </div>
    </Container>
  );
};

export default CreateComment;
