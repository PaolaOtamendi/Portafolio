import { socialData } from "../../constanst/socials";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";
import "./socials.css";

const iconMapSocials = {
  github: <FaGithub size="25" color="#100614" />,
  linkedin: <FaLinkedin size="25" color="#100614" />,
  whatsapp: <FaWhatsapp size="25" color="#100614" />,
  correo: <TbMailForward size="25" color="#100614" />,
};

export const SocialsLinks = () => {
  return (
    <div className="contain_socials">
      {socialData.map((item, index) => (
        <a className="social_button" key={index} href={item.path}>
          {iconMapSocials[item.icon]}
        </a>
      ))}
    </div>
  );
};
