import "./Background.css";
import { textSlider } from "../../data/data-slider";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

export const Background = () => {
  const [index, setIndex] = useState(0);
  const { id, title, text } = textSlider[index];

  const checkTextNumber = (sliderIndex) => {
    if (sliderIndex < 0) {
      return textSlider.length - 1;
    } else if (sliderIndex > textSlider.length - 1) {
      return 0;
    } else {
      return sliderIndex;
    }
  };

  const nextText = () => {
    const newText = index + 1;
    setIndex(checkTextNumber(newText));
  };

  const previousText = () => {
    const newText = index - 1;
    setIndex(checkTextNumber(newText));
  };

  return (
    <section className="container-home">
      <div className="wrapper-home" key={id}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="btn-left" onClick={previousText}>
          <FaArrowCircleLeft />
        </button>
        <button className="btn-right" onClick={nextText}>
          <FaArrowCircleRight />
        </button>
      </div>
    </section>
  );
};
