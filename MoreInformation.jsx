import "./MoreInformation.css";
import { ButtonRegistration } from "../button/ButtonRegistration";
import skiareal from "../../images/skiareal.png";
import gastronomie from "../../images/gastronomie.jpg";
import wellness from "../../images/wellness.jpg";
import services from "../../images/logo-lachman.jpg";

export const MoreInformation = () => {
  return (
    <section className="container-moreInfo">
      <div className="wrapper-moreInfo">
        <div>
          <h2>Ta benecká se vám určitě vyplatí!</h2>
        </div>
        <div className="info">
          <h3>
            Skipasy, vstupné, půjčovné, wellness i občerstvení vás vyjde
            levněji.
          </h3>
          <p>
            Ubytujte se u některého ze členů Sdružení Benecka a první krok máte
            splněný. Při příjezdu obdržíte kartu hosta, kterou zaregistrujete na
            webu. Pak vám cinkne nová zpráva do mailu s unikátním kódem, ten
            vyplníte do karty hosta a je hotovo.
          </p>
        </div>
        <ButtonRegistration />
      </div>
      <div className="wrapper-services">
        <div className="infotitle">
          <h2>Výhody, které Vás neminou!</h2>
          <h3>leden - duben</h3>
        </div>
        <div className="service ski">
          <h3>Skiareál Benecko</h3>
          <img src={skiareal} alt="" />
          <p>
            Sleva 20% s KH na vícedenní permanentky zakoupené jak na kase tak
            online pro období do 23.12.2024, 4.1.-1.2.2025 a od 16.3.2025
          </p>
        </div>
        <div className="service gastro">
          <h3>Gastronomie</h3>
          <img src={gastronomie} alt="" />
          <p>
            ProFamily Hotel TOP Benecko 10 % sleva na denní menu v restauraci
          </p>
        </div>
        <div className="service wellness">
          <h3>Wellness</h3>
          <img src={wellness} alt="" />
          <p>
            Sportovní centrum Jilemnice 25 % sleva na saunu, bazén a solnou
            jeskyni
          </p>
        </div>
        <div className="service rental">
          <h3>Půjčovna</h3>
          <img src={services} alt="" />

          <p>
            Sleva 5 – 20% na vícedenní zápůjčky sjezdového a snowboardového
            vybavení v období do 23.12.2024, 4.1.-1.2.2025 a od 16.3.2025 3.den
            sleva 5% / 4.den sleva 10% / 5.den sleva 15% / 6.den sleva 20%
          </p>
        </div>
      </div>
    </section>
  );
};
