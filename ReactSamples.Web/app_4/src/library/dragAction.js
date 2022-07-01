function dragAction() {

    var _initialMousePoint;
    var _initialTargetValue;
    var _target;

    var _updateValueOnDrag;

    this.startDrag = function (e, getInitialValue, updateValueOnDrag) {

        var isLeftClick = e.button == 0;
        if (!isLeftClick) {
            return;
        }

        _target = e.currentTarget;

        _initialMousePoint = Mouse.Get(e);
        _initialTargetValue = getInitialValue(e);
        _updateValueOnDrag = updateValueOnDrag;

        document.onmousemove = this.drag;
        document.onmouseup = this.finishDrag;

        console.log("start drag")
    };

    this.drag = function (e) {

        var currentMousePoint = Mouse.Get(e);

        _updateValueOnDrag(_target, _initialTargetValue, _initialMousePoint, currentMousePoint)

        console.log("drag")
    };

    this.finishDrag = function (e) {

        document.onmousemove = null;
        document.onmouseup = null;


        console.log("finish drag")
    };
}

//Mouse
function Mouse() { }
Mouse.Get = function (e) {
    return {
        x: Parse.Int(e.clientX),
        y: Parse.Int(e.clientY)
    };
}
Mouse.GetAsPosition = function (e) {
    var point = Mouse.Get(e);
    return {
        top: point.y,
        left: point.x
    };
}
Mouse.Subtract = function (minuendPoint, subtrahendPoint) {
    return {
        x: minuendPoint.x - subtrahendPoint.x,
        y: minuendPoint.y - subtrahendPoint.y
    };
};

//Position
function Position() { };
Position.Get = function (targetElement, getByComputedStyle) {

    var top = targetElement.style.top || 0;
    var left = targetElement.style.left || 0;

    if (getByComputedStyle) {
        top = getComputedStyle(targetElement).top;
        left = getComputedStyle(targetElement).left;
    }

    if (top) {
        top = top.replace("px", "");
    }

    if (left) {
        left = left.replace("px", "");
    }

    return {
        top: Parse.Int(top),
        left: Parse.Int(left),
    };
}
Position.AddPoint = function (position, point) {

    var newTop = position.top + point.y;
    var newleft = position.left + point.x;

    newTop = newTop; //newTop >= 0 ? newTop : 0;
    newleft = newleft; //newleft >= 0 ? newleft : 0;

    return {
        top: newTop,
        left: newleft
    };
}
Position.Set = function (targetElement, position) {

    targetElement.style.position = "absolute";
    targetElement.style.top = position.top + "px";
    targetElement.style.left = position.left + "px";
}
