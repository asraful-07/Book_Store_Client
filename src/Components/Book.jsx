import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BookInfoCard from "../Components/BookInfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = ["All", "children", "adventure", "biographic", "cook"];

const Book = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchBooks = async (category) => {
    try {
      const endpoint =
        category && category !== "All"
          ? `/book-info?category=${category}`
          : "/book-info";
      const res = await axiosSecure.get(endpoint);
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === cat
                ? "bg-green-700 text-white"
                : "bg-white text-green-700 border-green-700"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={1}
        navigation
        loop={false}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {books.map((bookInfo) => (
          <SwiperSlide key={bookInfo._id}>
            <BookInfoCard book={bookInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Book;
