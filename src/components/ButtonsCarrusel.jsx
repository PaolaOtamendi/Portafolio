import { useSwiper } from "swiper/react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export const ButtonsCarrusel = () => {
  const swiper = useSwiper();
  return (
    <div className="contain_buttons-slide flex gap-2 justify-center items-center p-3">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button className="buttonleft" onClick={() => swiper.slidePrev()}>
          <FaCircleArrowLeft
            className="iconLeft"
            size="35"
            color="#bcff12"
            viewBox="0 0 520 520"
          />
        </button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button className="buttonRigth" onClick={() => swiper.slideNext()}>
          <FaCircleArrowRight
            className="iconRigth"
            size="35"
            color="#bcff12"
            viewBox="0 0 520 520"
          />
        </button>
      </motion.div>
    </div>
  );
};
