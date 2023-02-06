import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "@/features/common/PropertyCard";

const PropertySlider = ({ featuredProperties }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      // loopFillGroupWithBlank={true}
      // loopfillgroupwithblank="true"
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {featuredProperties.map((property, index) => (
        <SwiperSlide key={index}>
          <PropertyCard {...property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertySlider;
