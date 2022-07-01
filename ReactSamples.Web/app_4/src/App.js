import React, { useState } from "react";

import './App.css';
import CarContext from "./store/CarContext";
import SteeringWheel from "./components/SteeringWheel";
import PhysicalCar from "./components/PhysicalCar";

function App() {

    const [steeringWheelRotation, setSteeringWheelRotation] = useState({ steeringWheel: 0, actualWheel: 0 });

    var initialContextValues = {
        actualWheel_RotationIncrement: 0.3,
        actualWheel_minRotation: -45,
        actualWheel_maxRotation: 45,
    };

    return <CarContext.Provider value={initialContextValues}>
        <PhysicalCar steeringWheelRotation={steeringWheelRotation} />
        <SteeringWheel
            steeringWheelRotation={steeringWheelRotation}
            setSteeringWheelRotation={setSteeringWheelRotation}/>
    </CarContext.Provider>
}

export default App;
