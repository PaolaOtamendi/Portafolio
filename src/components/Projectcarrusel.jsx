import { myProjects } from "../constanst/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonsCarrusel } from "./ButtonsCarrusel";
import "swiper/css";
import "swiper/css/navigation";
import "./projectscarrusel.css";


import { Navigation } from "swiper/modules";

export const ProjectCarrusel = () => {
  return (
    <section className="projects_carrusel">
      <div className="carrusel">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation = {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Navigation]}
          className="carrusel_contain"
        >
          {myProjects.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <img className="image_carrusel" src={item.image} alt={item.title} />
            </SwiperSlide>
          ))}
          
          <ButtonsCarrusel />
        </Swiper>
      </div>
    </section>
  );
};
