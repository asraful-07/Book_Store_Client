import Banner from "../../Components/Banner";
import Blog from "../../Components/Blog";
import Book from "../../Components/Book";
import Discount from "../../Components/Discount";
import Headline from "../../Components/Headline";
import MiniBanner from "../../Components/MiniBanner";
import Review from "../../Components/Review";
import Support from "../../Components/Support";
import Shop from "../../Components/Shop";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Discount />
      <Book />
      <Shop />
      <Review />
      <Support />
      <Blog />
      <MiniBanner />
    </div>
  );
};

export default Home;
