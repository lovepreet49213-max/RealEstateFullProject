import { testimonials } from "../../Dummydata/ClientData";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-3">
            Trusted by hundreds of happy property buyers and renters.
          </p>
        </div>

       <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  
  pagination={{ clickable: true }}
  autoplay={{
    delay: 900,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={900}
  loop={true}
  spaceBetween={30}
  className="pb-14"
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  }}
>
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

           <div className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl">
  {/* Quote Icon */}
  <div className="mb-6 flex justify-between items-center">

    <Quote
      size={40}
      className="text-indigo-600 opacity-80"
    />

    <div className="flex">
      {Array.from({ length: item.Rating }).map((_, index) => (
        <Star
          key={index}
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>

  </div>

  {/* Review */}

  <p className="text-gray-600 leading-8 text-[15px] line-clamp-5 min-h-[100px]">
    "{item.text}"
  </p>

  <div className="mt-auto pt-8 flex items-center gap-4 border-t border-gray-100">

    <img
      src={item.image}
      alt={item.name}
      className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100"
    />

    <div>

      <h3 className="font-bold text-lg">
        {item.name}
      </h3>

      <p className="text-sm text-gray-500">
        {item.title}
      </p>

      <span className="text-xs text-green-600 font-semibold">
        ✔ Verified Customer
      </span>

    </div>

  </div>

</div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}