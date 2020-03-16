var Controller = function (model, view) {
    this.model = model;
    this.view = view;
};

Controller.prototype.init = function () {
    this.model.init(this.needRendering.bind(this));

    let n = 0;
    let nTimer = setInterval(function () {
        var ball = {
            x: getRandom(0, window.innerWidth - Settings.maxR),
            y: getRandom(0, window.innerHeight - Settings.maxR),
            size: getRandom(Settings.minR, Settings.maxR),
            alpha: 1.0,
            color: `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}, 1.0)`,
            needToHide: false
        };

        controller.model.addBall(ball);
        controller.needRendering();
        if (++n === Settings.ballCount){
            clearInterval(nTimer);
        }
    }, 500);
    console.log(n);
    setTimeout(function () {
        controller.model.resizeBalls();
        requestAnimationFrame(controller.needRendering);
    }, Settings.ballCount * 500)
};

Controller.prototype.needRendering = function () {
    this.view.render(this.model.objs);
};

var controller = new Controller(model, view);
controller.init();