import React, { useState, useEffect } from "react";

import './App.css';
import AddStuffContainer from './components/AddStuff/AddStuffContainer';
import SeeTheListContainer from './components/SeeTheList/SeeTheListContainer';
import SeeTheDetailsContainer from './components/SeeTheDetails/SeeTheDetailsContainer';

function App() {

    var initialItemList = [
        {
            id: Math.random().toFixed(4),
            name: "Alpha",
            description: "Lorem Ipsum Alternative. Nobody will ask you, where have you found it. It is just as it is. No more excuses, just focus. Somebody will pass and sing, somebody will whistle, but the grey now is high and colours are coming. Hello universe.",
            imageUrl: "https://webdesignsurface.com:443/_data/9112/17058/805cabd4e8.png",
        }
    ];

    const [items, setItems] = useState(initialItemList);
    const [selectedItem, setSelectedItem] = useState(items[0]);


    useEffect(() => {

        var savedItemsString = localStorage.getItem("savedItems");
        if (savedItemsString) {

            var savedItems = JSON.parse(savedItemsString);
            setItems(savedItems);

        } else {
            console.log("no savedItems")
        }

    }, []);


    return <div>
        <AddStuffContainer setItems={setItems} />
        <SeeTheListContainer items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <SeeTheDetailsContainer item={selectedItem} />

        <div className="pos_18064_8401">
            <a href="https://react.cyberzenno.com/" target="_blank" className="ac_18064_7722  pos_18064_3645" rel="noreferrer" >React Samples</a>
            <a href="https://webdesignsurface.com/surface/view/18064/react-samples" className="ac_18064_7722 pos_18064_0936" target="_blank" rel="noreferrer" >Edit App UI</a>
            <a href="https://github.com/cyberzenno/react-samples/blob/main/ReactSamples.Web/app_1/src/App.js" className="ac_18064_7722 pos_18064_9809" target="_blank" rel="noreferrer" >Source Code on GitHub</a>
        </div>

    </div>;
}

export default App;
