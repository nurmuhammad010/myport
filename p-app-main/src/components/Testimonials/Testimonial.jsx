import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "  Working with Nurmuhammad was an excellent experience. He built a modern, responsive website for my business, exceeding my expectations. His attention to detail, creativity, and professionalism made the process smooth and efficient. Highly recommend him for any web development project",
    },
    {
      img: profilePic2,
      review:
        "“Nurmuhammad is a talented and reliable web developer. He turned our design ideas into a fully functional website, implementing clean code and interactive features. The project was delivered on time, and communication was seamless. I look forward to collaborating again!”",
    },
    {
      img: profilePic3,
      review:
        "Nurmuhammad developed a stunning portfolio site for me. His ability to blend design and functionality is outstanding. He listened carefully to my requirements, provided great suggestions, and delivered a site that looks amazing on all devices. I highly recommend his services!",
    },
    {
      img: profilePic4,
      review:
        "I had the pleasure of working with Nurmuhammad on a frontend project, and I was truly impressed with his technical skills. His expertise in HTML, CSS, and JavaScript allowed us to create an exceptional user experience. He’s a team player and always brings creative solutions to the table",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
