import React, { useState, useEffect } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

import image2 from "../../assets/register.jpg";

import { getNotices,getTwoNotices } from "../../services/notices";
import { FaArrowRightLong } from "react-icons/fa6";

const Carousel = () => {
  const [data, setData] = useState(null);

  const [notices, setNotices] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const datas = await getNotices();
        setNotices(datas); // Guardar los datos en el estado


        const data2 = await getTwoNotices();

        setData(data2)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // console.log(notices);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div
  className="slider w-full   h-[30rem] bg-gray-400  "
  style={{
    backgroundImage: `url(${data?.[currentIndex]?.urlToImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    
  }}
>
  <div className="backdrop-blur-md py-6 inset-0 bg-opacity-80 w-full h-full flex flex-col">
    <button className="slider-button prev" onClick={prevSlide}>
      ❮
    </button>
    <div className="slider-content w-full h-full">
      {data?.map((slide, index) => (
        <div
          key={slide.url}
          className={`w-full slide ${
            index === currentIndex ? "active" : "hidden"
          }`}
        >
          <div className="caption px-20 flex w-full h-full">
            <div className="w-1/2 flex flex-col gap-5 justify-center">
              <div className="font-semibold">{slide.title}</div>
              <div className="text-xs"> {slide.description}</div>
              <div className="flex gap-3 h-10 py-10">
                <Link className="flex gap-2" to={slide.url}>
                  <div className="h-full text-sm flex items-center">
                    Leer Mas
                  </div>
                  <div className="h-full text-3xl flex items-center">
                    <FaArrowRightLong />
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="w-96 h-96">
                <img src={slide.urlToImage} alt={slide.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className="slider-button next" onClick={nextSlide}>
      ❯
    </button>
  </div>
</div>

  );
};

export default Carousel;
