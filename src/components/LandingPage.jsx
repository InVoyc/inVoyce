import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import {Subscription} from "../components/Subscription/Subscription";
import "../stylesheets/landingPage.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <div>
      <Navigation handleOpenModal={handleOpenModal} />
      {modal && <Subscription handleCloseModal={handleCloseModal} />}
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default LandingPage;
