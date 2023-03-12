import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getpost, updatepost } from "../utils/crud";
import edit from "../utils/images/edit.png";
import { Modal, ModalContent, Update } from "../styles/Modal";
import {
  Container,
  CommentBody,
  CommentCard,
  CommentContainer,
  Edit,
  CommentEmail,
  CommentName,
  PostBody,
  PostCard,
  PostContainer,
  PostTitle,
} from "../styles/postStyle";
import CreateComment from "../components/CreateComment";
const Post = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState({ body: "", title: "" });
  const [bool, setBool] = useState(false);
  console.log(update);
  const handleDelete = async () => {
    try {
      const result = await getpost(params, setPost);
      setPost({ ...result });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleDelete();
    if (bool) {
      window.location.reload();
    }
  }, [bool]);

  return (
    <div>
      {post !== undefined ? (
        <div>
          <Container>
            <PostContainer>
              <PostCard>
                <PostTitle>
                  {post.title}{" "}
                  <Edit
                    src={edit}
                    alt=""
                    onClick={() => {
                      setModal(true);
                    }}
                  />
                </PostTitle>
                <PostBody>{post.body} </PostBody>
              </PostCard>
            </PostContainer>
            <CommentContainer>
              {post.comments &&
                post.comments.map((comment, ind) => {
                  return (
                    <CommentCard key={ind}>
                      <CommentName>{comment.name}</CommentName>
                      <CommentEmail>{comment.email}</CommentEmail>
                      <CommentBody>{comment.body}</CommentBody>
                    </CommentCard>
                  );
                })}
            </CommentContainer>
            <CreateComment postId={post.id} data={post.comments} />
          </Container>
          {modal && (
            <Modal>
              <ModalContent>
                <div>Title</div>
                <input
                  type="text"
                  onChange={(event) =>
                    setUpdate({ ...update, title: event.target.value })
                  }
                />
                <div>Body</div>
                <input
                  type="text"
                  onChange={(event) =>
                    setUpdate({ ...update, body: event.target.value })
                  }
                />
                <Update
                  onClick={() => {
                    updatepost(update, post.id).then(()=>{
                      setUpdate({body:'',title:''})
                      setBool(true);
                    })
                  }}
                >
                  Update
                </Update>
                <Update
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Close
                </Update>
              </ModalContent>
            </Modal>
          )}
        </div>
      ) : (
        <div style={{ marginTop: "100px" }}>Some issue occured!</div>
      )}
    </div>
  );
};

export default Post;
