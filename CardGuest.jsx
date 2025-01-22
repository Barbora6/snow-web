import "./CardGuest.css";
import { ButtonCardGuest } from "../button/ButtonCardGuest";

export const CardGuest = () => {
  return (
    <section className="container-cardGuest">
      <div className="wrapper-cardGuest">
        <h1>Karta hosta</h1>
        <p>
          Ubytujte se u jednoho ze členů Sdružení ubytovatelů Benecko a máte ho!
          Kód, díky kterému získáte během dovolené hromadu výhod. Tyhle slevy si
          užijete s celou rodinou. Zaručeně!
        </p>
        <ButtonCardGuest />
      </div>
    </section>
  );
};
