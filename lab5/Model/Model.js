var Model = function () {
    this.objs = [];
};

Model.prototype.init = function (renderFunction) {
    this.needRendering = renderFunction;
};

Model.prototype.addBall = function (obj) {
    this.objs.push(obj);
};

Model.prototype.resizeBalls = function () {
    let n = 0;
    let nTimer = setInterval(function () {
        if (n === Settings.ballCount - 1)
            clearInterval(nTimer);
        model.objs[n].needToHide = true;
        model.objs[n++].size *= 2;
        controller.needRendering();
    }, 2000);
};

var model = new Model();