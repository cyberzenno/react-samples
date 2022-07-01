function PhysicalCar(props) {

    var wheelStyle = { transform: "rotate(" + props.steeringWheelRotation.actualWheel + "deg)"};

    return <div className="ac_20051_2977 pos_20051_4605">
        <div className="ac_20051_1608 pos_20051_4606" style={wheelStyle}></div>
        <div className="ac_20051_1608 pos_20051_4608" style={wheelStyle}></div>

    <div className="ac_20051_1608 pos_20051_4607"></div>
    <div className="ac_20051_1608 pos_20051_4609"></div>
</div>;
}

export default PhysicalCar;