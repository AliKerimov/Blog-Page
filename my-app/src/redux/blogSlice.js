import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/api";
export const fetchProducts = createAsyncThunk("posts/", async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
});
const initialState= {
  products: [],
  loading: false,
  error: "",
};

export const blogsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchProducts.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      products: action.payload,
    }));
    builder.addCase(
      fetchProducts.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching products",
        })
    );
  },
});

export default blogsSlice.reducer;
export const selectAllProducts = (state) => state.products;
