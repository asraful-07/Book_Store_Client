import Banner from "../../Components/Banner";
import Blog from "../../Components/Blog";
import Book from "../../Components/Book";
import Discount from "../../Components/Discount";
import Headline from "../../Components/Headline";
import MiniBanner from "../../Components/MiniBanner";
import Review from "../../Components/Review";
import Support from "../../Components/Support";
import Avatar from "../../Components/Avatar";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Discount />
      <Book />
      {/* <Avatar /> */}
      <Review />
      <Support />
      <Blog />
      <MiniBanner />
    </div>
  );
};

export default Home;
