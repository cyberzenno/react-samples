import ReactDOM from "react-dom"

function Pop(props) {

    function getRandomInt(min, max) {
        
        var value = Math.random() * (max - min) + min;
        return value;
    }

    var top = getRandomInt(10, 200);
    var left = getRandomInt(300, 500);
    var rotate = getRandomInt(-30, 60)

    return <div style={{ transform: 'rotate(' + rotate + 'deg)', position: 'absolute', top: top + 'px', left: left + 'px' }} className={"ac_18075_4448 " + props.colorPopped}>Pop!</div>
}

function PopModal(props) {

    setTimeout(function () {

        props.dispatch({ type: 'close_pop' })

    }, 400);

    var popModalRoot = document.getElementById("pop-modal-root");
    return ReactDOM.createPortal(<Pop colorPopped={props.colorPopped} />, popModalRoot)
}

export default PopModal;