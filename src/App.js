import "./App.css";
// router
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
// context stuf
import { useAuthorContext } from "./context/author_context";
// general pages
import { Error, Login } from "./pages/index";
// general components
import { ScrollToTop } from "./components";
// user pages
import {
  UserSharedLayout,
  UserHomepage,
  UserPosts,
  SinglePost,
  About,
} from "./pages/User";
// author pages
import {
  AuthorSharedLayout,
  ProtectedRoute,
  AuthorHomepage,
  AuthorCategories,
  AddCategory,
  EditCategory,
  AuthorPosts,
  AddPost,
  EditPost,
} from "./pages/Author";
function App() {
  // context stuff
  const { isAuth } = useAuthorContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* <ScrollToTop /> */}
        {/* user routes */}
        <Route path="/" element={<UserSharedLayout />}>
          {/* <Route index element={<Navigate to={"sr"} replace />} /> */}
          <Route index element={<UserHomepage />} />
          <Route path="objave" element={<UserPosts />} />
          <Route path="o-nama" element={<About />} />
          <Route path="objava/:id" element={<SinglePost />} />
          <Route path="prijava" element={<Login />} />
        </Route>
        {/* user routes */}
        {/* author routes */}
        <Route path="/autor" element={<AuthorSharedLayout />}>
          <Route
            index
            element={
              <ProtectedRoute isAuth={isAuth}>
                <AuthorHomepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="kategorije"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <AuthorCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path="kategorije/dodaj-kategoriju"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <AddCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="kategorije/uredi-kategoriju/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <EditCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="objave"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <AuthorPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="objave/dodaj-objavu"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <AddPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="objave/uredi-objavu/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <EditPost />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* author routes */}
        {/* other routes */}
        <Route path="*" element={<Error />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
