import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      message:
        "The service was exceptional! The team went above and beyond to meet our needs. Highly recommended anyone quality work.",
      date: "2023-10-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      message:
        "Great experience overall. The project was delivered on time and communication was clear throughout the process.",
      date: "2023-09-28",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5,
      message:
        "Absolutely brilliant work! The attention to detail was impressive and the final result exceeded my expectations.",
      date: "2023-11-02",
    },
    {
      id: 4,
      name: "David Kim",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      message:
        "Professional team with creative solutions. They understood our vision perfectly and executed flawlessly.",
      date: "2023-10-22",
    },
    {
      id: 5,
      name: "Jessica Williams",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
      rating: 4,
      message:
        "Very satisfied with the results. The team was responsive and addressed all our concerns promptly.",
      date: "2023-09-15",
    },
    {
      id: 6,
      name: "Robert Garcia",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      rating: 5,
      message:
        "Outstanding service from start to finish. Will definitely work with them again for future projects.",
      date: "2023-11-10",
    },
    {
      id: 7,
      name: "Olivia Martinez",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 4,
      message:
        "Great communication and timely delivery. The quality of work was excellent and worth every penny.",
      date: "2023-10-05",
    },
    {
      id: 8,
      name: "Daniel Wilson",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      message:
        "One of the best experiences I've had working with a service provider. Highly professional and talented team.",
      date: "2023-11-18",
    },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it - hear from some of our satisfied
          customers.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    onError={(e) => {
                      e.target.src = `https://randomuser.me/api/portraits/${
                        review.id % 2 === 0 ? "men" : "women"
                      }/${review.id}.jpg`;
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  "{review.message}"
                </p>
                <p className="text-sm text-gray-500">
                  {formatDate(review.date)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
