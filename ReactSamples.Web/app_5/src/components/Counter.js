import "./Counter.css"
import { useSelector, useDispatch } from 'react-redux'

function Counter() {

    const dispatch = useDispatch();

    var incHandler = () => {
        dispatch({ type: "inc" });
    }

    var decHandler = () => {
        dispatch({ type: "dec" });
    }

    const counter = useSelector(state => state.counter);

    return <div style={{ position: "relative" }}>

        <div className="ac_22053_1491 pos_22053_1447">
            {counter}
        </div>

        <div onClick={decHandler}
            className="ac_22053_1220 pos_22053_1445">
            Minus
        </div>
        <div onClick={incHandler}
            className="ac_22053_1220 pos_22053_1446">
            Plus
        </div>

    </div>
}

export default Counter;