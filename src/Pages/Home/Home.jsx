import Banner from "../../Components/Banner";
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
    </div>
  );
};

export default Home;
