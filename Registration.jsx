import { MainForm } from "./MainForm";
import "./Registration.css";

export const Registration = () => {
  return (
    <section className="container-registration">
      <div className="wrapper-registration">
        <h2>Registrace karty hosta</h2>
        <p>
          <span>Děkujeme, že používáte Kartu hosta Benecko. </span>Pro
          registraci a používání karty potřebujeme zjistit základní informace o
          vás. Po správném vyplnění jednoduchého formuláře vám bude zaslán
          registrační mail s unikátním kódem, který opíšete na papírovou kartu
          hosta. Pro celou vaši rodinu postačí jedna karta hosta a tedy i jedna
          registrace. Pokud po dobu ubytování nemáte dostupný svůj mail,
          požádejte vašeho ubytovatele o zprostředkování registrace karty hosta.
        </p>
      </div>
      <div className="wrapper-form">
        <MainForm />
      </div>
    </section>
  );
};
