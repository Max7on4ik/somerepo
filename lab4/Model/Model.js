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
        setInterval(function (element) {
            element.needToHide = true;
        }, 1000, model.objs[n]);
        model.objs[n].size *= 2;
        controller.needRendering();
        n++;
    }, 2000);
};

var model = new Model();