import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

 export const BotonLets = () => {
  return (
    <div>
      <Link to="/Me">
        <button
          className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 hover:text-white duration-300
          bg-white text-black text-lg rounded-lg p-2 font-bold m-3 flex items-center cursor-pointer"
        >
          Let´s Go!
          <FontAwesomeIcon
            icon={faStar}
            spin
            size="lg"
            style={{ color: "#00ff91" }}
            className="ml-2"
          />
        </button>
      </Link>
    </div>
  );
};

