import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat shadow-lg ${styles.noramlFlex}`}
        style={{
          backgroundImage: `url(https://buildfire.com/wp-content/themes/buildfire/assets/images/vertical-ecommerce.png)`,
          backgroundSize: "auto 80%",
          backgroundPosition: "right",
        }}
      >
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat shadow-lg ${styles.noramlFlex}`}
          style={{
            backgroundImage: `url(images/b3.svg)`,
            backgroundSize: "auto 100%",
          }}
        >
          <div className={`${styles.section} w-[80%] 800px:w-[80%] pl-0 `}>
            <h1
              className={`text-[44x] leading-[1.2] 800px:text-[40px] text-[#3d3a3a]  font-[600] italic `}
            >
              Profitez de nos offres limitées sur une sélection <br />
              exclusive de produits. Ne manquez pas <br /> ces promotions
              <span className="text-indigo-500 font-bold"> temporaires !</span>
            </h1>
          </div>
        </div>
      </div>
      <hr  className="p-8"/>
      {!isLoading && (
        <>
          <div className={`${styles.section}`}>
            <div className="w-full grid">
              {allEvents?.length > 0 ? (
                allEvents.map((event) => (
                  <EventCard key={event.id} data={event} />
                ))
              ) : (
                <h4>Aucun événement disponible !</h4>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Events;
