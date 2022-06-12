// react stuff
import React from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
// context stuff
import reducer from "../reducers/author_reducer";
// actions
import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_USER,
  LOGOUT_USER,
  SET_CATEGORIES,
  SET_POSTS,
  CHANGE_ACTIVE_LINK,
  SET_DASHBOARD,
  SHOW_ERROR,
  SET_LOADING,
  SET_SINGLE_CATEGORY,
  SET_SINGLE_POST,
  SIDEBAR_ACTIVE,
} from "../actions/author_actions";
const initialState = {
  random: false,
  loginLoading: false,
  loginError: false,
  isAuth: false,
  author: {},
  categories: [],
  posts: [],
  dashboard: [],
  activeLink: "pocetna",
  sidebarActive: false,
  addError: false,
  loading: false,
  singleCategory: {},
  singlePost: {},
};
const AuthorContext = React.createContext();
export const AuthorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   login author
  const loginAuthor = async (name, password) => {
    dispatch({ type: LOGIN_LOADING, payload: true });
    if (name === "" || password === "") {
      dispatch({ type: LOGIN_ERROR, payload: true });
      setTimeout(() => {
        dispatch({ type: LOGIN_ERROR, payload: false });
        dispatch({ type: LOGIN_LOADING, payload: false });
      }, 2000);
    }
    try {
      const req = await axios.post(
        `${process.env.REACT_APP_BACK_END_API_KEY}/author/login`,
        {
          username: name,
          password,
        }
      );
      dispatch({
        type: LOGIN_USER,
        payload: { token: req.data.token, author: req.data.author },
      });
      dispatch({ type: LOGIN_LOADING, payload: false });
      // get requests
      await getAuthorData("author/categories", SET_CATEGORIES);
      await getAuthorData("author/posts", SET_POSTS);
      await getAuthorData("author/categories-posts", SET_DASHBOARD);
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: true });
      setTimeout(() => {
        dispatch({ type: LOGIN_LOADING, payload: false });
        dispatch({ type: LOGIN_ERROR, payload: false });
      }, 2000);
    }
  };
  // logout author
  const logoutAuthor = async () => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = await axios.post(
      `${process.env.REACT_APP_BACK_END_API_KEY}/author/logout`,
      {},
      config
    );
    dispatch({ type: LOGOUT_USER });
  };
  // get author data
  const getAuthorData = async (route, action) => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = await axios.get(
      `${process.env.REACT_APP_BACK_END_API_KEY}/${route}`,
      config
    );
    let data =
      action === SET_CATEGORIES
        ? req.data.categories
        : action === SET_DASHBOARD
        ? req.data.dashboard
        : req.data.posts;
    dispatch({ type: action, payload: data });
  };
  //   get token
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  // change active link
  const changeActiveLink = (value) => {
    dispatch({ type: CHANGE_ACTIVE_LINK, payload: value });
  };
  // sidebar active toggle
  const sidebarFunction = (value) => {
    dispatch({ type: SIDEBAR_ACTIVE, payload: value });
  };
  //
  // add new category
  const addNewCategory = async (value, username) => {
    if (value === "") {
      dispatch({ type: SHOW_ERROR, payload: true });
      setTimeout(() => {
        dispatch({ type: SHOW_ERROR, payload: false });
      }, 2000);
    } else {
      dispatch({ type: SET_LOADING, payload: true });
      try {
        const token = getToken();
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const req = await axios.post(
          `${process.env.REACT_APP_BACK_END_API_KEY}/author/category`,
          {
            name: value,
            author: username,
          },
          config
        );
        await updateAll();
        alert("Uspjesno ste dodali kategoriju!");
        dispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        alert("Doslo je do greske!");
        dispatch({ type: SET_LOADING, payload: false });
      }
    }
  };
  // delete category
  const deleteCategory = async (value) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const token = getToken();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const req = await axios.delete(
        `${process.env.REACT_APP_BACK_END_API_KEY}/author/category/${value}`,
        config
      );
      await updateAll();
      alert("Uspjesno ste obrisali kategoriju!");
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      alert("Doslo je do greske!");
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
  // update all
  const updateAll = async () => {
    await getAuthorData("author/categories", SET_CATEGORIES);
    await getAuthorData("author/posts", SET_POSTS);
    await getAuthorData("author/categories-posts", SET_DASHBOARD);
  };
  // get single category
  const getSingleCategory = async (value) => {
    dispatch({ type: SET_LOADING, payload: true });
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const req = await axios.get(
        `${process.env.REACT_APP_BACK_END_API_KEY}/author/category/${value}`,
        config
      );
      dispatch({ type: SET_SINGLE_CATEGORY, payload: req.data.category });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_SINGLE_CATEGORY, payload: {} });
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
  // update single category
  const updateCategory = async (value, author, id) => {
    if (value === "") {
      dispatch({ type: SHOW_ERROR, payload: true });
      setTimeout(() => {
        dispatch({ type: SHOW_ERROR, payload: false });
      }, 2000);
    } else {
      dispatch({ type: SET_LOADING, payload: true });
      try {
        const token = getToken();
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const req = await axios.patch(
          `${process.env.REACT_APP_BACK_END_API_KEY}/author/category/${id}`,
          {
            name: value,
            author: author,
          },
          config
        );
        await updateAll();
        alert("Uspjesno ste uredili kategoriju!");
        dispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        alert("Doslo je do greske!");
        dispatch({ type: SET_LOADING, payload: false });
      }
    }
  };
  const createNewPost = async (
    title,
    category,
    thumbnail,
    otherImages,
    youtube,
    text
  ) => {
    if (
      title === "" ||
      category === "" ||
      thumbnail === "" ||
      otherImages === "" ||
      youtube === "" ||
      text === ""
    ) {
      dispatch({ type: SHOW_ERROR, payload: true });
      setTimeout(() => {
        dispatch({ type: SHOW_ERROR, payload: false });
      }, 2000);
    } else {
      dispatch({ type: SET_LOADING, payload: true });
      try {
        const token = getToken();
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // set thumbnail
        const thumbnailData = thumbnail[0];
        const formData = new FormData();
        formData.append("thumbnail", thumbnailData, thumbnailData.name);
        // set other images
        for (let i = 0; otherImages.length > i; i++) {
          const file = otherImages[i];
          formData.append("otherImages", file, file.name);
        }
        // set fields
        formData.append("title", title);
        formData.append("category", category);
        formData.append("youtube", youtube);
        formData.append("text", text);
        // send data
        const req = await axios.post(
          `${process.env.REACT_APP_BACK_END_API_KEY}/author/post`,
          formData,
          config
        );
        await updateAll();
        alert("Uspjesno ste dodali objavu!");
        dispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        alert("Doslo je do greske!");
        dispatch({ type: SET_LOADING, payload: false });
      }
    }
  };
  // delete single post
  const deleteSinglePost = async (value) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const token = getToken();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const req = await axios.delete(
        `${process.env.REACT_APP_BACK_END_API_KEY}/author/post/${value}`,
        config
      );
      await updateAll();
      alert("Uspjesno ste obrisali objavu!");
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      alert("Doslo je do greske!");
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
  // get single post
  const getSinglePost = async (value) => {
    dispatch({ type: SET_LOADING, payload: true });
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const req = await axios.get(
        `${process.env.REACT_APP_BACK_END_API_KEY}/author/post/${value}`,
        config
      );
      dispatch({ type: SET_SINGLE_POST, payload: req.data.post });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_SINGLE_POST, payload: {} });
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
  // edit single post
  const editSinglePost = async (
    id,
    title,
    category,
    thumbnail,
    otherImages,
    youtube,
    text
  ) => {
    if (
      title === "" ||
      category === "" ||
      thumbnail === "" ||
      otherImages === "" ||
      youtube === "" ||
      text === ""
    ) {
      dispatch({ type: SHOW_ERROR, payload: true });
      setTimeout(() => {
        dispatch({ type: SHOW_ERROR, payload: false });
      }, 2000);
    } else {
      dispatch({ type: SET_LOADING, payload: true });
      try {
        const token = getToken();
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // set thumbnail
        const thumbnailData = thumbnail[0];
        const formData = new FormData();
        formData.append("thumbnail", thumbnailData, thumbnailData.name);
        // set other images
        for (let i = 0; otherImages.length > i; i++) {
          const file = otherImages[i];
          formData.append("otherImages", file, file.name);
        }
        // set fields
        formData.append("title", title);
        formData.append("category", category);
        formData.append("youtube", youtube);
        formData.append("text", text);
        // send data
        const req = await axios.patch(
          `${process.env.REACT_APP_BACK_END_API_KEY}/author/post/${id}`,
          formData,
          config
        );
        await updateAll();
        alert("Uspjesno ste uredili objavu!");
        dispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        alert("Doslo je do greske!");
        dispatch({ type: SET_LOADING, payload: false });
      }
    }
  };
  return (
    <AuthorContext.Provider
      value={{
        ...state,
        loginAuthor,
        logoutAuthor,
        changeActiveLink,
        addNewCategory,
        deleteCategory,
        getSingleCategory,
        updateCategory,
        createNewPost,
        deleteSinglePost,
        getSinglePost,
        editSinglePost,
        sidebarFunction,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};
// export
export const useAuthorContext = () => {
  return useContext(AuthorContext);
};
