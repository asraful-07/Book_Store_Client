import Banner from "../../Components/Banner";
import Blogs from "../../Components/Blogs";
import Book from "../../Components/Book";
import Discount from "../../Components/Discount";
import Headline from "../../Components/Headline";
import MiniBanner from "../../Components/MiniBanner";
import Review from "../../Components/Review";
import Support from "../../Components/Support";
import Shop from "../../Components/Shop";
import Author from "../../Components/Author";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Discount />
      <Book />
      <Shop />
      <Author />
      <Review />
      <Support />
      <Blogs />
      <MiniBanner />
    </div>
  );
};

export default Home;
