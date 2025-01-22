import { useEffect, useRef } from "react";

export const PersonalForm = ({ handleStep }) => {
  const firstNameRef = useRef(null);
  const emailRef = useRef(null);
  const surnameRef = useRef(null);
  const phoneRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    handleStep();
  };

  useEffect(() => {
    firstNameRef?.current.focus();
  }, []);

  return (
    <section className="container-form">
      <h2>Vyplňte následující údaje:</h2>
      <form onSubmit={submit}>
        <input name="firstname" placeholder="Jméno" ref={firstNameRef} />
        <br />
        <input name="surname" placeholder="Příjmení" ref={surnameRef} />
        <br />
        <input type="email" placeholder="Email" ref={emailRef} />
        <br />
        <input type="phone" placeholder="Telefon" ref={phoneRef} />
        <br />
        <button className="btn-form">Odeslat</button>
      </form>
    </section>
  );
};
