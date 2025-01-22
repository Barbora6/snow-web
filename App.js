import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Accomodation } from "./pages/Accomodation";
import { WeatherApp } from "./pages/weather/WeatherApp";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { Error } from "./pages/Error";
import { SharedLayout } from "./pages/SharedLayout";
import { CardGuest } from "./pages/card/CardGuest";
import { MoreInformation } from "./pages/card/MoreInformation";
import { Registration } from "./pages/form/Registration";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cardGuest" element={<CardGuest />} />
          <Route path="/more-info" element={<MoreInformation />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
