import { useEffect } from "react";
import { Virtual, Pagination, Navigation, Autoplay } from "swiper/modules";
import { SiJordan, SiNike } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WavyLink } from "react-wavy-transitions";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { getProductsFromServer, selectProduct } from "store/productSlice";
import { ShoeTypeSlider } from "constants";
import Shoes3d from "components/Shoes3d";
import SliderCard from "components/SliderCard";
import ParticlesComponent from "components/Particles";
import Loader from "components/Loader";
import TrendsCard from "components/TrendsCard";

const Home = () => {
  const products = useAppSelector(selectProduct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsFromServer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="relative h-full" id="landing">
        <Shoes3d />

        <main className="absolute md:relative left-0 top-0 z-[9997]">
          <div className="w-[600px] md:!w-full lg:w-[400px] pt-40 bg-[#024742] left-1 md:h-[300px] h-[100vh]">
            <div className="text-white sm:pl-0 pl-8 space-y-6 font-[cursive] relative md:flex justify-center">
              <SiJordan
                style={{ transform: "rotate(185deg)" }}
                className=" md:hidden text-center absolute lg:left-[180px] left-[279px] text-[6rem] top-[116px] font-[20rem] text-[#fffffff6]"
              />

              <p className="sm-x2:!text-[20px] text-7xl md:text-3xl">
                Step into
              </p>
              <p
                className="sm-x2:!text-[20px] text-9xl md:flex md:text-3xl lg:ml-3 ml-28"
                id="code"
              >
                S<span>t</span>
                <SiJordan
                  style={{ transform: "rotate(185deg)" }}
                  className="sm-x2:mt-2 md:block hidden font-[20rem] text-[#fffffff6]"
                />
                <span className=" sm-x2:ml-5 md:ml-1 ml-10"> l</span>
                <span>e</span>
              </p>
              <p className="sm-x2:!text-[20px] text-7xl md:text-3xl md:ml-2">
                With Nike
              </p>
            </div>
          </div>
        </main>

        <a
          href="#gallery"
          className="scrollDown sm:hidden text-[#10753A] absolute right-1 bottom-32"
        >
          <span className="left-3 relative">scroll down</span>
          <img
            width={"2rem"}
            className="absolute z-50 cursor-pointer w-8 top-[-2px]"
            src="/images/download-removebg-preview.png"
            alt="scroll down"
          />
        </a>
      </section>

      <Swiper
        modules={[Virtual, Pagination, Navigation]}
        rewind={true}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1370: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="px-4 z-[9997] sm-x2:bottom-64 md:!mb-0 relative bottom-16 sm:!w-full lg:w-[88%] md:pb-20 w-[80%]  pb-20"
      >
        {products.length > 0 ? (
          <>
            {products.slice(0, 10).map((data) => (
              <SwiperSlide
                key={crypto.randomUUID()}
                className="text-center  font-[18px]   flex justify-center items-center"
              >
                <SliderCard {...data} />
              </SwiperSlide>
            ))}
          </>
        ) : null}
      </Swiper>

      <div className="relative">
        <ParticlesComponent color="#024742" />

        <section className=" mt-32">
          <div className="flex justify-between lg:mx-10 sm-x2:!mx-5 mx-40">
            <p className="text-left sm-x2:text-[16px] text-[#024742] text-4xl mb-16">
              Why choose Nike shoes?{" "}
            </p>
            <SiNike className="text-5xl bg-[#2a6e6a] text-white px-3 py-1 rounded-full" />
          </div>

          <main className="flex flex-wrap lg:mx-10 sm-x2:!mx-5 justify-center gap-12">
            <div
              style={{
                boxShadow:
                  "12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)",
              }}
              className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] rounded-3xl p-8 bg-[#ecf0f3] "
            >
              <span className="block mx-auto font-bold text-center">
                Beauty
              </span>
              <p className=" text-[13px] mt-8 tracking-tight  ">
                Nike has tried to make its name synonymous with fashion and
                beauty, so every pair of Nike sneakers or sneakers can mean a
                new season in fashion.
              </p>
            </div>
            <div
              style={{
                boxShadow:
                  "12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)",
              }}
              className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] rounded-3xl p-8 bg-[#ecf0f3] "
            >
              <span className="block mx-auto font-bold text-center">
                comfortable
              </span>
              <p className=" text-[13px] mt-8 tracking-tight  ">
                Nike is not only a sports brand, but this brand also has the
                best offers for daily walks and a long working day. Give comfort
                to your feet.
              </p>
            </div>
            <div
              style={{
                boxShadow:
                  "12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)",
              }}
              className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] rounded-3xl p-8 bg-[#ecf0f3] "
            >
              <span className="block mx-auto font-bold text-center">
                diverse
              </span>
              <p className=" text-[13px] mt-8 tracking-tight  ">
                You can use Nike shoes for walking on flat surfaces, climbing,
                running or specialized sports such as basketball, tennis or
                volleyball.
              </p>
            </div>
          </main>
        </section>

        <div className="mt-40">
          <div className="flex justify-between lg:mx-10 sm-x2:!mx-5 mx-40">
            <p className="text-left sm-x2:text-[19px] text-[#024742] text-4xl mb-16">
              Trends{" "}
            </p>
            <WavyLink to="/all-products" duration={1000} color="#fff">
              <p className="text-center flex justify-end items-center gap-2 pb-5 sm-x2:text-[19px] text-[#024742]  text-[20px] mb-16">
                Other Products <IoIosArrowRoundForward />
              </p>
            </WavyLink>
          </div>

          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            rewind={true}
            className="sm-x2:block hidden w-full"
          >
            {products &&
              products.map((data) => (
                <SwiperSlide
                  key={crypto.randomUUID()}
                  className="overflow-hidden"
                >
                  <TrendsCard {...data} />
                </SwiperSlide>
              ))}
          </Swiper>

          <main className="sm-x2:hidden lg:px-5 justify-evenly flex flex-wrap w-full gap-20 px-10">
            {products &&
              products
                .slice(0, 12)
                .map((data) => (
                  <TrendsCard key={crypto.randomUUID()} {...data} />
                ))}
          </main>
        </div>
      </div>

      <div
        className="mt-64 pt-10 bg-[#024742] pb-6 select-none relative"
        id="gallery"
      >
        <div className="flex justify-between sm:flex-wrap sm:flex-col-reverse sm:justify-center sm:gap-3 lg:mx-10 sm-x2:!mx-5 mx-40">
          <p className="text-left sm:text-center text-[#ffffff] sm:text-[1rem] text-4xl mb-16">
            Shoes suitable for any type of work
          </p>
          <SiNike className="text-5xl bg-[#ffffff] text-[#2a6e6a] sm:mx-auto px-3 py-1 rounded-full" />
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          rewind={true}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="z-[9999] relative slider2 sm:!w-full lg:w-[88%] sm:mt-4 w-[80%] mt-10 pb-32"
        >
          {ShoeTypeSlider &&
            ShoeTypeSlider.map((data) => (
              <SwiperSlide
                key={crypto.randomUUID()}
                className=" flex items-center justify-center"
              >
                <img className="w-[200px] rounded-full" src={data} alt="nike" />
              </SwiperSlide>
            ))}
        </Swiper>

        <a
          href="#landing"
          className="scrollDown sm:hidden text-[#ffffff] absolute right-4 bottom-36"
        >
          <span className="left-3 relative text-[#ffffff]">scroll top</span>
          <img
            width={"2rem"}
            className="absolute z-50 cursor-pointer w-8 top-[-2px]"
            src="/images/download-removebg-preview-top.png"
            alt="scroll top"
          />
        </a>
      </div>

      {!products.length && <Loader />}
    </>
  );
};

export default Home;
