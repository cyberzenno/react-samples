
function SeeTheListContainer(props) {

    function selectItem(e) {
        var key = e.target.getAttribute("data-id");

        var selectedItem =
            //props.items.find(x => x.id == key);   //original code, not build correctly by react-polyfill for IE.11
            find(props.items, key);                 //workaround for IE11

        props.setSelectedItem(selectedItem);
    }

    function getSelectedClass(x) {
        return x.id == props.selectedItem.id ? "ac_18064_9933" : "";
    }

    //workaround for IE11
    function find(items, key) {
        var x = items.filter(x => x.id == key);
        if (x.length >= 1) {
            return x[0];
        }
    }

    return <div className="ac_18064_5831 ac_18064_8673 pos_18064_4735">

        <div className="ac_18064_3343 pos_18064_2572">Here I want to see the list</div>

        {props.items.map(x =>
            <div key={x.id} data-id={x.id} className={"ac_18064_5877 " + getSelectedClass(x)} style={{ backgroundColor: x.color }} onClick={selectItem}>{x.name}</div>
        )}


    </div>;
}

export default SeeTheListContainer;