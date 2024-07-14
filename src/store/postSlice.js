import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePosts: (state) => {
      state.posts = []; // Clear allPosts array
    },
  },
});

export const { addPosts ,deletePosts} = postSlice.actions;
export default postSlice.reducer;

