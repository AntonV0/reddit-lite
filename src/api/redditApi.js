// Implement this later (after setting up routing?)

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopPosts = createAsyncThunk(
  'posts/fetchTopPosts',
  async ({ subreddit, time }) => {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/top/?t=${time}.json`
    );
    const json = await response.json();
    return json();
  }
);
