import React, { useContext } from "react";
import CarContext from "../store/CarContext";

function ContextConsumer() {

    const ctx = useContext(CarContext);

    return <div>

        <h1>
            {ctx.wheelRotation}
        </h1>

    </div>

}


export default ContextConsumer;