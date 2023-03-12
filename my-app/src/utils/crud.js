import axios from "axios";

import { fetchProducts } from "../redux/blogSlice";
export async function getpost(params,setPost) {
    try {
      const response = await axios.get(
        `https://blog-api-t6u0.onrender.com/posts/${params?.id}?_embed=comments`
      );
      const data = response.data;
      setPost({ ...data });
    } catch (error) {
      return;
    }
  }
export async function deletepost(dispatch,params) {
    try {
      const response = await axios.delete(
        `https://blog-api-t6u0.onrender.com/posts/${params?.id}`
      );
      dispatch(fetchProducts("/posts"));
      const data = response.data;
      console.log(data);
    } catch (error) {
      return;
    }
  }