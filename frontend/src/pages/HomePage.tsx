import HeroSection from "../components/HeroSection";
import HighlightBar from "../components/HighlightBar";
import AboutSection from "../components/AboutSection";
import FeaturedPosts from "../components/FeaturedPosts";
import NewsletterSignup from "../components/NewsletterSignup";
import FeaturedArticles from "../components/FeaturedArticles";

function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightBar />
      <AboutSection />
      <FeaturedPosts />
      <NewsletterSignup />
      <FeaturedArticles />
    </>
  );
}

export default HomePage;
