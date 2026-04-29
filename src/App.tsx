import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { useScrollToHash } from "./hooks/useScrollToHash";

function App(): JSX.Element {
  useScrollToHash();

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
