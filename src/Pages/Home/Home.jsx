import Banner from "../../Components/Banner";
import Blog from "../../Components/Blog";
import Book from "../../Components/Book";
import Discount from "../../Components/Discount";
import Headline from "../../Components/Headline";
import Review from "../../Components/Review";
import Support from "../../Components/Support";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Discount />
      <Book />
      <Review />
      <Support />
      <Blog />
    </div>
  );
};

export default Home;
