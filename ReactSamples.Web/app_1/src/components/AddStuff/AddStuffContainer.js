import React, { useState, useRef } from "react";
import ColorSelector from "./ColorSelector";

function AddStuffContainer(props) {

	//when using 'ref', we call them Uncontrolled Elements
	var nameRef = useRef();
	var descriptionRef = useRef();
	var imageUrlRef = useRef();

	//when using 'state', then Controlled Elements
	const [newColor, setNewColor] = useState("");
	const [showColorSelector, setShowColorSelector] = useState(false);


	function addItem() {
		var newItem = {
			id: Math.random().toFixed(4),
			name: nameRef.current.value,
			description: descriptionRef.current.value,
			imageUrl: imageUrlRef.current.value,
			color: newColor
		};

		props.setItems(x => {
			var updatedItems = [...x, newItem];

			localStorage.setItem("savedItems", JSON.stringify(updatedItems));

			return updatedItems;
		});

		//despite is heavily 'suggested' not to manipulate directly the DOM,
		//in case of local reset of values only, is 'tolerated' to do so
		nameRef.current.value = "";
		descriptionRef.current.value = "";
		imageUrlRef.current.value = "";

		setNewColor(newColor);
		setShowColorSelector(false);
	}


	return <div className="ac_18064_5831 ac_18064_6983 pos_18064_0768">

		<div className="ac_18064_3343 pos_18064_8746">Here I want to add stuff</div>

		<div className="ac_18064_4305 pos_18064_3906">
			<div className="ac_18064_5865 pos_18064_3914">Name</div>
			<input className="ac_18064_4463 pos_18064_3920" type="text" ref={nameRef} />
		</div>

		<div className="ac_18064_4305 pos_18064_9850">
			<div className="ac_18064_5865 pos_18064_9856">Description</div>
			<input className="ac_18064_4463 pos_18064_9862" type="text" ref={descriptionRef} />
		</div>

		<div className="ac_18064_4305 pos_18064_9851">
			<div className="ac_18064_5865 pos_18064_9857">Image Url</div>
			<input className="ac_18064_4463 pos_18064_9864" type="text" ref={imageUrlRef} />
		</div>

		{showColorSelector ? <ColorSelector newColor={newColor} setNewColor={setNewColor} setShowColorSelector={setShowColorSelector} /> : <div></div>}

		<div className="ac_18064_3774 pos_18064_9155" onClick={x => setShowColorSelector(!showColorSelector)}>
			<div className="ac_18064_5865 pos_18064_9158">Color</div>
			<div className="ac_18064_7454 pos_18064_9166" style={{ backgroundColor: newColor }} ></div>
		</div>

		<div className="ac_18064_5672 pos_18064_0450" onClick={addItem}>Add</div>

	</div>
}

export default AddStuffContainer;