import React from "react";
import { Container } from "./styles/createPostStyle";
const CreatePost = () => {
  console.log("ho");
  return (
    <Container>
      <div>
        <div>
          <label htmlFor="">Title</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Body</label>
          <br />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>Create</div>
      </div>
    </Container>
  );
};

export default CreatePost;
