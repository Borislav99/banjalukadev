// eslint-disable-next-line no-unused-vars
import React from "react";
// actions
import {
  SIDEBAR_TOGGLE,
  CHANGE_ACTIVE_LINK,
  SET_LOADING,
  SET_POSTS,
  SET_CATEGORIES,
  FILTER_POSTS,
  FETCH_SINGLE_PRODUCT,
  SET_TUTORIAL,
  SET_SINGLE_POST,
} from "../actions/user_actions";
const user_reducer = (state, action) => {
  if (action.type === SIDEBAR_TOGGLE) {
    return { ...state, sidebarActive: action.payload };
  }
  if (action.type === CHANGE_ACTIVE_LINK) {
    return { ...state, activeLink: action.payload };
  }
  if (action.type === SET_LOADING) {
    return { ...state, loading: action.payload };
  }
  if (action.type === SET_POSTS) {
    return { ...state, posts: action.payload, filteredPosts: action.payload };
  }
  if (action.type === SET_CATEGORIES) {
    return { ...state, categories: action.payload };
  }
  if (action.type === FILTER_POSTS) {
    if (action.payload === "sve") {
      return {
        ...state,
        filteredPosts: state.posts,
      };
    } else {
      const newArray = state.posts.filter((item) => {
        if (item.categoryName === action.payload) {
          return item;
        } else {
          return null;
        }
      });
      return { ...state, filteredPosts: newArray };
    }
  }
  if (action.type === FETCH_SINGLE_PRODUCT) {
    return { ...state, singleProduct: action.payload };
  }
  if (action.type === SET_TUTORIAL) {
    return { ...state, tutorial: action.payload };
  }
  if (action.type === SET_SINGLE_POST) {
    return { ...state, singlePost: action.payload };
  }
};
export default user_reducer;
