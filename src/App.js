import { Route, Routes } from "react-router";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filters" element={<FiltersPage />} />
      </Routes>
    </div>
  );
};

export default App;
