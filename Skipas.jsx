import "./Skipas.css";
import { FaSkiing } from "react-icons/fa";

export const Skipas = () => {
  return (
    <section>
      <FaSkiing className="icon-ski" />
      <button className="btn">
        <a href="https://benecko.eskipass.cz/">Skipas online</a>
      </button>
    </section>
  );
};
