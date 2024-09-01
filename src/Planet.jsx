import React from "react";

const Planet = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venuse", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div>
      {planets.map(
        (planet) =>
          planet.isGasPlanet && <h1 key={planet.name}>{planet.name}</h1>
      )}
    </div>
  );
};

export default Planet;
