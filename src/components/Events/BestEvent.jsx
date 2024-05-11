import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const BestEvent = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === allEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, [allEvents]);

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section} `}>
          <div className={`${styles.heading}`}>
            <h1>Les promotions limitées</h1>
          </div>

          <div className="w-full grid">
            {allEvents.length !== 0 && (
              <EventCard key={allEvents[currentEventIndex].id} data={allEvents[currentEventIndex]} />
            )}

            <h4>{allEvents?.length === 0 && "Aucun événement disponible !"}</h4>
          </div>
        </div> 
      )}
    </div>
  );
};

export default BestEvent;
