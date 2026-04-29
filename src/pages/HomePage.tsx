import { useScrollToHash } from "../hooks/useScrollToHash";
import { useBlobVisibility } from "../hooks/useBlobVisibility";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { PortfolioPreview } from "../components/PortfolioPreview";

export const HomePage = (): JSX.Element => {
  useScrollToHash();
  useBlobVisibility();

  return (
    <>
      <Hero />
      <Experience />
      <PortfolioPreview />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
