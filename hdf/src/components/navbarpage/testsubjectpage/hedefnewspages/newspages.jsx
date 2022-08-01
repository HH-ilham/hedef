import React from "react";
import { Routes, Route } from "react-router-dom";
import News1 from "./news1";
import News2 from "./news2";
import News3 from "./news3";
import Dim1 from "./dim1";
import Dim2 from "./dim2";
import Dim3 from "./dim3";
import Sociallife1 from "./sociallife1";
import Sociallife2 from "./sociallife2";
import Sociallife3 from "./sociallife3";
import Projects1 from "./projects1";
import Projects2 from "./projects2";
import Projects3 from "./projects3";
function Newspages() {
  return (
    <Routes>
      <Route path="/news1" stack element={<News1 />} />
      <Route path="/news2" element={<News2 />} />
      <Route path="/news3" element={<News3 />} />

      <Route path="/dim1" element={<Dim1 />} />
      <Route path="/dim2" element={<Dim2 />} />
      <Route path="/dim3" element={<Dim3 />} />

      <Route path="/sociallife1" element={<Sociallife1 />} />
      <Route path="/sociallife2" element={<Sociallife2 />} />
      <Route path="/sociallife3" element={<Sociallife3 />} />

      <Route path="/projects1" element={<Projects1/>} />
      <Route path="/projects2" element={<Projects2/>} />
      <Route path="/projects3" element={<Projects3/>} />
    </Routes>
  );
}

export default Newspages;
