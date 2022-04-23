import React, { useReducer } from "react";
import PopModal from "./PopModal";

function BubblesContainer() {

    const initialBaloonsState = { red: 100, blue: 100, orange: 100, green: 100, colorPopped: "" };

    function reducer(state, action) {
        switch (action.type) {
            case 'inc_red':
                state.red += 10;
                break;
            case 'inc_blue':
                state.blue += 10;
                break;
            case 'inc_green':
                state.green += 10;
                break;
            case 'inc_orange':
                state.orange += 10;
                break;

            case 'pop_red':
                state.red = 50;
                state.colorPopped = "ac_18075_8239";
                break;
            case 'pop_blue':
                state.blue = 50;
                state.colorPopped = "ac_18075_9185";
                break;
            case 'pop_green':
                state.green = 50;
                state.colorPopped = "ac_18075_6970";
                break;
            case 'pop_orange':
                state.orange = 50;
                state.colorPopped = "ac_18075_1529";
                break;

            case 'close_pop':
                state.colorPopped = false;
                break;
        }


        return { ...state };
    }

    const [state, dispatch] = useReducer(reducer, initialBaloonsState);


    return <div>

        {state.colorPopped && <PopModal colorPopped={state.colorPopped} dispatch={dispatch} />}


        <div className="ac_18075_0895 pos_18075_0927">
            <div className="ac_18075_6943 pos_18075_0929">Handle state with Redux</div>

          
            <img src="https://webdesignsurface.com:443/_data/9112/17058/b580ebc008.png" style={{ width: state.green + "px" }}
                className="ac_18075_5757 ac_18075_6901 pos_18075_0933" onClick={() => dispatch({ type: 'pop_green' })} />

            <img src="https://webdesignsurface.com:443/_data/9112/17058/b580ebc008.png" style={{ width: state.orange + "px" }}
                className="ac_18075_5757 ac_18075_0855  pos_18075_0935" onClick={() => dispatch({ type: 'pop_orange' })} />

            <img src="https://webdesignsurface.com:443/_data/9112/17058/b580ebc008.png" style={{ width: state.red + "px" }}
                className="ac_18075_5757 ac_18075_3949 pos_18075_0937" onClick={() => dispatch({ type: 'pop_red' })} />

            <img src="https://webdesignsurface.com:443/_data/9112/17058/b580ebc008.png" style={{ width: state.blue + "px" }}
                className="ac_18075_5757 ac_18075_3525 pos_18075_0931" onClick={() => dispatch({ type: 'pop_blue' })} />

        </div>

        <div>
            <div className="ac_18075_2900 ac_18075_7267 pos_18075_0906" onClick={() => dispatch({ type: 'inc_blue' })}></div>
            <div className="ac_18075_7267 ac_18075_9605 pos_18075_0909" onClick={() => dispatch({ type: 'inc_green' })}></div>
            <div className="ac_18075_7267 ac_18075_6556 pos_18075_0918" onClick={() => dispatch({ type: 'inc_orange' })}></div>
            <div className="ac_18075_7267 ac_18075_5389 pos_18075_0923" onClick={() => dispatch({ type: 'inc_red' })}></div>
        </div>

        <div className="pos_18075_0969">
            <a className="ac_18064_7722 pos_18075_0972" href="https://react.cyberzenno.com/" target="_blank" rel="noreferrer" >React Samples</a>
            <a href="https://webdesignsurface.com/surface/view/18075/react-course_app_2---redux-sample" className="ac_18064_7722 pos_18075_0975" target="_blank" rel="noreferrer" >Edit App UI</a>
            <a href="https://github.com/cyberzenno/react-samples/blob/main/ReactSamples.Web/app_2/src/App.js" className="ac_18064_7722  pos_18075_0978" target="_blank" rel="noreferrer" >Source Code on GitHub</a>
        </div>

    </div>

}

export default BubblesContainer;