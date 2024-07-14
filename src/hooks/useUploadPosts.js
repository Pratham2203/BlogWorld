import React from "react";
import { addPosts } from "../store/postSlice";
import appwriteService from "../appwrite/config";

async function useUploadPosts(dispatch) {
  try {
    const posts = await appwriteService.getPosts([]);

    dispatch(addPosts(posts.documents));
    return true;
  } catch (error) {
    console.error("Error uploading posts:", error);
    return false;
  }
}

export default useUploadPosts;