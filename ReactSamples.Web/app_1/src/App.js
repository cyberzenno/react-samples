import React, { useState } from "react";

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

    return <div>
        <AddStuffContainer setItems={setItems} />
        <SeeTheListContainer items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
        <SeeTheDetailsContainer item={selectedItem}/>

        <a href="https://webdesignsurface.com/surface/view/18064/react-course_react-app---add-stuff" target="_blank" rel="noreferrer" className="ac_18064_7722 pos_18064_0936">Edit UI</a>
    </div>;
}

export default App;
