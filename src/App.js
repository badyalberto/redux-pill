import { Route, Routes } from "react-router";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filters" element={<FiltersPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
