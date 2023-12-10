import FeaturedBlog from "../components/featured_blog";
import FeaturedCategory from "../components/featured_category";
import FeaturedCollection from "../components/featured_collections";
import Hero from "../components/hero";
import IconBox from "../components/icon_box";
import TopProducts from "../components/top_products";
import TrendingNow from "../components/trending";

const Home = () => {
  return (
    <>
      <main className="main">
        <Hero />
        <TrendingNow />
        <FeaturedCollection />
        <FeaturedCategory />
        <TopProducts />
        <IconBox />
        <FeaturedBlog />
      </main>
    </>
  );
};

export default Home;
