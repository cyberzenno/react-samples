function ColorSelector(props) {

    function setColor(e) {
        var color = getComputedStyle(e.target).backgroundColor;

        props.setNewColor(color);

        props.setShowColorSelector(false);
    }


    return <div className="ac_18064_5831 ac_18064_9130 pos_18064_8110">
        <div className="ac_18064_4899 ac_18064_3881 pos_18064_2428" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_4649 pos_18064_8813" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_3154 pos_18064_8817" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_5171 pos_18064_8821" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_7434 pos_18064_8824" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_9458 pos_18064_8827" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_9826 pos_18064_8835" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_2034 pos_18064_8839" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_4249 pos_18064_8842" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_5681 pos_18064_8845" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_7034 pos_18064_8849" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_9626 pos_18064_8853" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_1555 pos_18064_8857" onClick={setColor}></div>
        <div className="ac_18064_4899 ac_18064_1218 pos_18064_8860" onClick={setColor}></div>
    </div>
}

export default ColorSelector;