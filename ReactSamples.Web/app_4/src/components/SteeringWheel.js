import React, { useState, useEffect, useRef, useContext } from "react";
import CarContext from "../store/CarContext";

//--This should be somewhere else-------------------------
function dragAction() {

    var _initialMousePoint;
    var _updateValueOnDrag;

    this.startDrag = function (e, updateValueOnDrag) {

        var isLeftClick = e.button == 0;
        if (!isLeftClick) {
            return;
        }

        _initialMousePoint = Mouse.Get(e);

        _updateValueOnDrag = updateValueOnDrag;

        document.onmousemove = this.drag;
        document.onmouseup = this.finishDrag;
    };

    this.drag = function (e) {

        var currentMousePoint = Mouse.Get(e);

        _updateValueOnDrag(_initialMousePoint, currentMousePoint)
    };

    this.finishDrag = function (e) {

        document.onmousemove = null;
        document.onmouseup = null;
    };
}

function Mouse() { }
Mouse.Get = function (e) {
    return {
        x: Parse.Int(e.clientX),
        y: Parse.Int(e.clientY)
    };
}

function Parse() { }
Parse.Int = function (stringValue) {
    var parsed = parseInt(stringValue);

    if (parsed && parsed != NaN) {
        return parsed;
    }

    return 0;
}
//------------------------------------------------------


function SteeringWheel(props) {

    //local vars and ctx
    var _ctx = useContext(CarContext);
    var increment = _ctx.actualWheel_RotationIncrement;
    var minRot = _ctx.actualWheel_minRotation;
    var maxRot = _ctx.actualWheel_maxRotation;

    //state handling from props
    var _steeringWheelRotation = props.steeringWheelRotation;
    var _setSteeringWheelRotation = props.setSteeringWheelRotation;

    //refs
    var wheelContainerRef = useRef();
    var wheel = { x: 0, y: 0 };

    var v1 = useRef();
    var v2 = useRef();

    function initWheelAxis() {

        var wheelStyle = getComputedStyle(wheelContainerRef.current);
        var h = wheelStyle.height.replace("px", "");
        var w = wheelStyle.width.replace("px", "");

        wheel.x = wheelStyle.left.replace("px", "");
        wheel.x = Parse.Int(wheel.x) + Parse.Int(h) / 2;

        wheel.y = wheelStyle.top.replace("px", "");
        wheel.y = Parse.Int(wheel.y) + Parse.Int(w) / 2;
    }

    function startDrag(e) {
        initWheelAxis();
        new dragAction().startDrag(e, updateValueOndrag)
    }

    function updateValueOndrag(initialMousePoint, currentMousePoint) {
        var origin = { x: wheel.x, y: wheel.y };

        var currentDegrees = getDegreesFromMousePoint(origin, currentMousePoint);
        var initialDegrees = getDegreesFromMousePoint(origin, initialMousePoint);

        var incrementDegreesBy = currentDegrees - initialDegrees;

        var newValue = Parse.Int(_steeringWheelRotation.steeringWheel + incrementDegreesBy);


        _setSteeringWheelRotation(currentState => {
            var currentValue = currentState.steeringWheel;
            var aw = currentState.actualWheel;

            var isTurningRight = newValue >= currentValue;
            if (isTurningRight) {

                var aw = currentState.actualWheel;
                if (aw + increment < maxRot) {
                    return {
                        steeringWheel: newValue,
                        actualWheel: aw + increment
                    };
                }
            }

            var isTurningLeft = newValue <= currentValue;
            if (isTurningLeft) {

                var aw = currentState.actualWheel;
                if (aw - increment > minRot) {

                    return {
                        steeringWheel: newValue,
                        actualWheel: aw - increment
                    };
                }
            }

            return { ...currentState };
        });

    }

    function getDegreesFromMousePoint(origin, mousePoint) {
        var a = origin;
        var b = mousePoint;

        var deltaY = b.y - a.y;
        var deltaX = b.x - a.x;

        var slope = deltaX != 0 ? deltaY / deltaX : 0;

        var degrees = Math.atan(slope) * 360 / Math.PI;

        return degrees;
    }


    return <React.Fragment>

        <img src="https://webdesignsurface.com:443/_data/9112/17058/836c6b07f8.png"
            style={{ transform: "rotate(" + _steeringWheelRotation.steeringWheel + "deg)" }}
            onMouseDown={startDrag} ref={wheelContainerRef}
            draggable={false} onDragStart={() => { return false; }} className="ac_20051_0538 pos_20051_4603 unselectable" />

        <div ref={v1}></div>
        <div ref={v2}></div>

    </React.Fragment>
}

export default SteeringWheel;