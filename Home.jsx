import { Background } from "./Background";
import { ImageBox } from "./ImageBox";
import "./Home.css";
import { Description } from "./Description";

export const Home = () => {
  return (
    <section>
      <Background />
      <Description />
      <ImageBox />
    </section>
  );
};
