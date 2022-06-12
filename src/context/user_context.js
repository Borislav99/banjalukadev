// react stuff
import React from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
// context stuff
import reducer from "../reducers/user_reducer";
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
const initialState = {
  sidebarActive: false,
  activeLink: "pocetna",
  loading: false,
  posts: [],
  filteredPosts: [],
  categories: [],
  singleProduct: {},
  tutorial: false,
  singlePost: false,
};
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // open and close sidebar
  const sidebarFunction = (value) => {
    dispatch({ type: SIDEBAR_TOGGLE, payload: value });
  };
  const changeActiveLink = (value) => {
    dispatch({ type: CHANGE_ACTIVE_LINK, payload: value });
  };
  const getUserData = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    // get posts
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_END_API_KEY}/user/posts`
      );
      console.log(response);
      dispatch({ type: SET_POSTS, payload: response.data.posts });
    } catch (error) {
      dispatch({ type: SET_POSTS, payload: [] });
    }
    // get categories
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_END_API_KEY}/user/categories`
      );
      dispatch({ type: SET_CATEGORIES, payload: response.data.categories });
    } catch (error) {
      dispatch({ type: SET_CATEGORIES, payload: [] });
    }
    dispatch({ type: SET_LOADING, payload: false });
  };
  // filter posts
  const filterPosts = (value) => {
    dispatch({ type: FILTER_POSTS, payload: value });
  };
  // get single post
  const getSinglePost = async (value) => {
    try {
      dispatch({ type: SET_SINGLE_POST, payload: true });
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_END_API_KEY}/user/post/${value}`
      );
      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: response.data.myPost });
      dispatch({ type: SET_SINGLE_POST, payload: false });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: {} });
    }
  };
  // set tutorial
  const setTutorial = (value) => {
    dispatch({ type: SET_TUTORIAL, payload: value });
  };
  // use effects
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        sidebarFunction,
        changeActiveLink,
        getUserData,
        filterPosts,
        getSinglePost,
        setTutorial,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// export
export const useUserContext = () => {
  return useContext(UserContext);
};
