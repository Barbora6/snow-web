import "./Map.css";
import benecko5 from "../../images/benecko5.jpg";
import mapabenecko from "../../images/mapa-benecko.jpg";

export const Map = () => {
  return (
    <section className="container-map">
      <div className="map-wrapper">
        <img src={mapabenecko} alt="" />
      </div>
      <div className="description-1-wrapper">
        <h3>Skiareál Benecko</h3>
        <p>
          Přijeďte k nám na parádní lyžovačku! Každý den pro vás upravujeme 14
          sjezdovek. Malí i velcí, zkušení i začátečníci, lyžaři i snowboarďáci,
          všichni si u nás protáhnou tělo na svahu a procvičí oblouk.
          <hr />
        </p>
        <p>
          Nahoru vás pohodlně přepraví 9 lyžařských vleků. Na čtyřsedačce Kejnos
          si bezvadně odpočinete. Podívejte se na mapu skiareálu a naplánujte
          si, kde budete dneska jezdit. Začátečníci své první obloučky bezpečně
          nacvičí v některém z dětských parků s pojízdnými pásy.
        </p>
      </div>
      <div className="description-2-wrapper">
        <h3>V zimě u nás můžete prozkoumat</h3>
        <p>7 modrých, 2 červené a 2 černé sjezdovky</p>
        <p>
          3 dětské parky a <span>3 snowtubingové dráhy</span>
        </p>
        <p>
          až 100 km <span>běžeckých tras</span>
        </p>
        <p>
          Vyrazte na večerko a zažijte lyžování s kouzelnou noční atmosférou.
          Lyžařské i snowboardové vybavení si můžete půjčit.
        </p>
      </div>
      <div className="picture-wrapper">
        <img src={benecko5} alt="" />
      </div>
    </section>
  );
};
