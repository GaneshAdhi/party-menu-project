import Home from "./components/Home";
import IngredientPage from "./components/IngredientPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/ingredient" element={<IngredientPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
