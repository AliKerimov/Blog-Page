import axios from "axios";
import { fetchProducts } from "../redux/blogSlice";
export async function getpost(params, setPost) {
  try {
    const response = await axios.get(
      `https://blog-api-t6u0.onrender.com/posts/${params.id}?_embed=comments`
    );
    const data = response.data;
    // setPost({ ...data });
    return data;
  } catch (error) {
    return;
  }
}
export async function deletepost(dispatch, params) {
  try {
    const response = await axios.delete(
      `https://blog-api-t6u0.onrender.com/posts/${params.id}?_embed=comments`
    );
    dispatch(fetchProducts("/posts"));
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}
export async function createpost(postData) {
  try {
    if (postData?.body.length !== 0 || postData?.title.length !== 0) {
      console.log(postData);
      const response = await axios.post(`https://blog-api-t6u0.onrender.com/posts`, postData);
      console.log(response);
      
      return true;
    }
    else { return false }
  } catch (error) {
    return false;
  }
}
export async function createcomment(postData) {
  try {
      const response = await axios.post(`https://blog-api-t6u0.onrender.com/comments`, postData);
      return response;
    
  } catch (error) {
    return error;
  }
}
export async function updatepost(postData,id) {
  try {
    if (postData?.body.length !== 0 || postData?.title.length !== 0) {
      console.log(postData);
      const response = await axios.put(`https://blog-api-t6u0.onrender.com/posts/${id}`, postData);      
      return response;
    }
    else { return false }
  } catch (error) {
    return error;
  }
}

