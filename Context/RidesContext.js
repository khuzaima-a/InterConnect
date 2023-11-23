import React, { createContext, useState, useContext } from "react";
import Rides from "../Data/Rides";

const RidesContext = createContext();

const RidesProvider = ({ children }) => {
          const [rides, setRides] = useState(Rides);
  return (
    <RidesContext.Provider value={{ rides, setRides }}>
      {children}
    </RidesContext.Provider>
  );
};

const useRides = () => {
  return useContext(RidesContext);
};

export { RidesProvider, useRides };
