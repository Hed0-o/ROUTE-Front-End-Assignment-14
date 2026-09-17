import Categories from "../components/Categories";
import FeaturedArticles from "../components/FeaturedArticles";
import HomeHero from "../components/HomeHero";
import LatestArticles from "../components/LatestArticles";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
      <Newsletter />
    </>
  );
}
