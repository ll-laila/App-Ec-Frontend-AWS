import React from "react";
import styles from "../styles/styles";
import Events from "../components/Events/Events";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  return (
        <div>
          <Header activeHeading={4} />
          <div className={`${styles.section} hidden sm:block pt-10`}>
            <Events />
          </div>
          <Footer />       
        </div>
    
  );
};

export default EventsPage;
