import React from "react";

const CarContext = React.createContext({
    actualWheel_RotationIncrement: 0.1,
    actualWheel_minRotation: 45,
    actualWheel_maxRotation: -45,
});

export default CarContext;