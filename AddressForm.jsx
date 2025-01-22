import { useRef, useEffect } from "react";

export const AddressForm = ({ handleStep }) => {
  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const houseNumberRef = useRef(null);
  const pscRef = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();
    handleStep();
  };

  useEffect(() => {
    streetRef?.current.focus();
  }, []);

  return (
    <section className="container-form">
      <h2>Vyplňte Vaši adresu:</h2>
      <form onSubmit={formSubmit}>
        <input type="street" placeholder="ulice" ref={streetRef} />
        <br />
        <input
          type="descriptive number"
          placeholder="číslo popisné"
          ref={houseNumberRef}
        />
        <br />
        <input type="city" placeholder="město" ref={cityRef} />
        <br />
        <input type="psc" placeholder="PSČ" ref={pscRef} />
        <br />
        <button className="btn-form">Odeslat</button>
      </form>
    </section>
  );
};
