import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import NotFound from "./pages/Notfound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet-1" element={<Project1 />} />
          <Route path="/projet-2" element={<Project2 />} />
          <Route path="/projet-3" element={<Project3 />} />
          <Route path="/projet-4" element={<Project4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
