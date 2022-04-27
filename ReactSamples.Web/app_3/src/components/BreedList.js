import React, { useState, useEffect } from "react";

function BreedList(props) {

    const [breedList, setBreedList] = useState([]);

    async function fetchBreedsList() {
        var response = await fetch("https://api.thecatapi.com/v1/breeds");

        var json = await response.json();
        var finalModel = json.map(x => {
            return {
                id: x.id,
                name: x.name,
                temperament: x.temperament,
                origin: x.origin,
                description: x.description,
                image_url: x.image ? x.image.url : "",
                wikipedia_url: x.wikipedia_url,
                life_span: x.life_span
            }
        });

        setBreedList(x => finalModel);

        var selectedBreed = finalModel[0];
        props.setSelectedBreed(x => selectedBreed);

        markBreedAsSelected(selectedBreed.name);
    }

    useEffect(() => {
        fetchBreedsList();
    }, []);


    async function fetchBreed(e) {

        var breedName = e.target.innerHTML.trim();

        var response = await fetch("https://api.thecatapi.com/v1/breeds/search?q=" + breedName)
        var json = await response.json();

        console.log(json)

        var finalModel = json.map(x => {
            return {
                id: x.id,
                name: x.name,
                temperament: x.temperament,
                origin: x.origin,
                description: x.description,
                image_url: "https://cdn2.thecatapi.com/images/" + x.reference_image_id + ".jpg",
                wikipedia_url: x.wikipedia_url,
                life_span: x.life_span
            }
        });

        var selectedBreed = finalModel.length > 0 ? finalModel[0] : "";
        props.setSelectedBreed(x => selectedBreed);

        markBreedAsSelected(selectedBreed.name);

    }

    function markBreedAsSelected(breedName) {

        var breedTarget = document.querySelector("[data-breed-name='" + breedName + "']");
        if (breedTarget) {

            //remove all "select" classes (ac_18082_3961)
            var allSelected = document.querySelectorAll(".ac_18082_3961");
            for (var i = 0; i < allSelected.length; i++) {
                allSelected[i].classList.remove("ac_18082_3961");
            }

            breedTarget.classList.add("ac_18082_3961");

        }
    }


    return <div>
        <div className="ac_18082_6553 ac_18082_8026 pos_18082_2843" onClick={fetchBreedsList}>Fetch Data from Cats API - Breeds</div>

        <div className="ac_18082_0722 pos_18082_5194">

            {breedList.map(x =>
                <div key={x.id} className="ac_18082_0890 pos_18082_5198" onClick={fetchBreed} data-breed-name={x.name}>{x.name}</div>
            )}

        </div>


    </div>



}


export default BreedList;