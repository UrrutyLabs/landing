import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import LeanZupplyCaseStudy from "./pages/case-studies/LeanZupplyCaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route
            path="/case-studies/leanzupply"
            element={<LeanZupplyCaseStudy />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
