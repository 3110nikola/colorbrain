import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Generate } from "./pages/Generate";
import Contact from "./pages/Contact";
import { Faq } from "./pages/Faq";
import Search from "./pages/Search";
import { About } from "./pages/About";
import { NewAI } from "./pages/NewAI";
import { McChatty } from "./pages/McChatty";
import { LogoBot } from "./pages/LogoBot";
import { Melodroid } from "./pages/Melodroid";

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-black text-green-500 font-m-plus-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/future" element={<NewAI />} />
          <Route path="future/mcchatty" element={<McChatty />} />
          <Route path="future/logobot" element={<LogoBot />} />
          <Route path="future/melodroid" element={<Melodroid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
