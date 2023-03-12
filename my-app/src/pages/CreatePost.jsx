import React, { useState } from "react";
import { Container, Create, Err, Success } from "../styles/createPostStyle";
import { createpost } from "../utils/crud";
const CreatePost = () => {
  const [success, setSuccess] = useState("");
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  return (
    <Container>
      <div>
        <h1>Create Post</h1>
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
        <Create
          onClick={() => {
            createpost(post)
              .then((bool) => {
                setSuccess(bool);
                setPost({body:'',title:''})
              })
              .catch((error) => {
                setSuccess(error);
              });
          }}
        >
          Create
        </Create>
        {success !== ""? (
          <div>
            {success === true  && <Success>Successfully created</Success>}
            {!success && <Err>There is some isssue</Err>}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </Container>
  );
};

export default CreatePost;
