import React, { useState, useEffect } from "react";

import './App.css';
import BreedList from './components/BreedList';
import BreedDetails from './components/BreedDetails';

function App() {

    const [selectedBreed, setSelectedBreed] = useState({
        id: "",
        name: "Loading...",
        temperament: "",
        origin: "",
        description: "",
        image_url: "",
        wikipedia_url: "",
        life_span: ""
    });


    return <div>
        <BreedList setSelectedBreed={setSelectedBreed} />
        <BreedDetails breed={selectedBreed} setSelectedBreed={setSelectedBreed} />


        <div class="pos_18075_0969">
            <a class="ac_18064_7722  pos_18075_0972" href="https://react.cyberzenno.com/" target="_blank" rel="noreferrer">
                React Samples
            </a>
            <a href="https://webdesignsurface.com/surface/view/18082/react-course_app_3---fetch-cats" class="ac_18064_7722 pos_18075_0975" target="_blank" rel="noreferrer">
                Edit App UI
            </a>
            <a href="https://github.com/cyberzenno/react-samples/blob/main/ReactSamples.Web/app_3/src/App.js"
                class="ac_18064_7722  pos_18075_0978" rel="noreferrer" target="_blank">
                Source Code on GitHub
            </a>
        </div>
    </div>
}

export default App;
