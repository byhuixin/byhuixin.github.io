import { useScrollToHash } from "../hooks/useScrollToHash";
import { useBlobVisibility } from "../hooks/useBlobVisibility";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { PortfolioPreview } from "../components/PortfolioPreview";
import { PageBlobCanvas } from "../components/PageBlobCanvas";

export const HomePage = (): JSX.Element => {
  useScrollToHash();
  useBlobVisibility();

  return (
    <>
      <PageBlobCanvas />
      <Hero />
      <Experience />
      <PortfolioPreview />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
