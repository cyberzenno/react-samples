function SeeTheDetailsContainer(props) {

    var imageSrc = props.item.imageUrl;// || "https://webdesignsurface.com/_data/9112/17058/805cabd4e8.png";
 
    return <div className="ac_18064_5831 ac_18064_0382 pos_18064_5048">

        <div className="ac_18064_3343 pos_18064_0908">Here I want to see the details</div>

        <div className="ac_18064_6230 pos_18064_0845">Key</div>
        <div className="ac_18064_8812 pos_18064_8447">{props.item.id}</div>

        <div className="ac_18064_6230 pos_18064_7136">Name</div>
        <div className="ac_18064_5019 pos_18064_2699">{props.item.name}</div>

        <img src={imageSrc} className="ac_18064_6599 pos_18064_6592" style={{ backgroundColor: props.item.color }} alt="" />

        <div className="ac_18064_6230 pos_18064_0843">Description</div>
        <div className="ac_18064_0830 pos_18064_2703">
            {props.item.description}
        </div>

    </div>;
}

export default SeeTheDetailsContainer;