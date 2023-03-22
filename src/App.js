import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
