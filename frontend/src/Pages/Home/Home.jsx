import React, { useEffect } from "react";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import Loader from "../../Components/Layout/Loader/Loader";
import Utility from "../../Components/Product/Utility";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, product, productsCount } = useSelector(
    (state) => state.products
  );
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    // console.log(user);
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div className="banner">
        <div className="bannerSlider">
          <Carousel height="30rem" stopAutoPlayOnHover={true} animation="slide">
            {product &&
              product.map((item, i) => (
                <div
                  className="bannerImage"
                  key={i}
                  style={{
                    backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.5%, #1A1A1A 100%), url(${
                      item.bgImage && item.bgImage.url
                    })`,
                  }}
                >
                  <Utility product={item} />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h2 className="homeHeading">Featured Products</h2>
          <div className="cardHolder">
            <Swiper
              modules={[Navigation, Autoplay, Parallax]}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 1 },
                480: { slidesPerView: 2, spaceBetween: 2 },
                768: { slidesPerView: 3, spaceBetween: 5 },
                1024: { slidesPerView: 5, spaceBetween: 10 },
              }}
              parallax
              navigation
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              // navigation
            >
              {product &&
                product.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard key={item._id} product={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="advertise">
            {/* <img src="/Ad2.jpg" alt="" /> */}
          </div>
          <h2 className="homeHeading">Trending Products</h2>
          <div className="cardHolder">
            <Swiper
              modules={[Navigation, Autoplay, Parallax]}
              // spaceBetween={10}
              // slidesPerView={5}
              parallax
              navigation
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 1 },
                480: { slidesPerView: 2, spaceBetween: 2 },
                768: { slidesPerView: 3, spaceBetween: 5 },
                1024: { slidesPerView: 5, spaceBetween: 10 },
              }}
              // navigation
            >
              {product &&
                product.map((item) => (
                  <SwiperSlide key={item._id}>
                    <ProductCard key={item._id} product={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
