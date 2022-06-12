// eslint-disable-next-line no-unused-vars
import React from "react";
// actions
import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_USER,
  SET_CATEGORIES,
  SET_POSTS,
  LOGOUT_USER,
  CHANGE_ACTIVE_LINK,
  SET_DASHBOARD,
  SHOW_ERROR,
  SET_LOADING,
  SET_SINGLE_CATEGORY,
  SET_SINGLE_POST,
  SIDEBAR_ACTIVE,
} from "../actions/author_actions";
const author_reducer = (state, action) => {
  if (action.type === LOGIN_LOADING) {
    return { ...state, loginLoading: action.payload };
  }
  if (action.type === LOGIN_ERROR) {
    return { ...state, loginError: action.payload };
  }
  if (action.type === LOGIN_USER) {
    const { author, token } = action.payload;
    localStorage.setItem("token", token);
    return { ...state, isAuth: true, author };
  }
  if (action.type === SET_CATEGORIES) {
    return { ...state, categories: action.payload };
  }
  if (action.type === SET_POSTS) {
    return { ...state, posts: action.payload };
  }
  if (action.type === SET_DASHBOARD) {
    return { ...state, dashboard: action.payload };
  }
  if (action.type === LOGOUT_USER) {
    localStorage.setItem("token", "");
    return {
      ...state,
      random: false,
      loginLoading: false,
      loginError: false,
      isAuth: false,
      author: {},
      categories: [],
      posts: [],
    };
  }
  if (action.type === CHANGE_ACTIVE_LINK) {
    return { ...state, activeLink: action.payload };
  }
  if (action.type === SHOW_ERROR) {
    return { ...state, addError: action.payload };
  }
  if (action.type === SET_LOADING) {
    return { ...state, loading: action.payload };
  }
  if (action.type === SET_SINGLE_CATEGORY) {
    return { ...state, singleCategory: action.payload };
  }
  if (action.type === SET_SINGLE_POST) {
    return { ...state, singlePost: action.payload };
  }
  if (action.type === SIDEBAR_ACTIVE) {
    return { ...state, sidebarActive: action.payload };
  }
};
export default author_reducer;
