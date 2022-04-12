function ItemWithLabel(props) {

	var p1 = props.p1;
	var p2 = props.p2;
	var p3 = props.p3;
	var label = props.label;

	return <div className={"ac_18064_4305 " + p1}>
		<div className={"ac_18064_5865" + p2}>{label}</div>
		<input className={"ac_18064_4463" + p3} type="text" />
	</div>;
}

export default ItemWithLabel;