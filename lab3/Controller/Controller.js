var Controller = function (model, view) {
    this.model = model;
    this.view = view;
};

Controller.prototype.init = function () {
    this.model.init(this.needRendering.bind(this));

    let n = 0;
    let nTimer = setInterval(function () {
        let ball = {
            x: getRandom(0, window.innerWidth - Settings.maxR),
            y: getRandom(0, window.innerHeight - Settings.maxR),
            size: getRandom(Settings.minR, Settings.maxR),
            needToHide: false
        };

        controller.model.addBall(ball);
        controller.view.renderObj(ball);
        if (++n === Settings.ballCount){
            clearInterval(nTimer);
        }
    }, 500);
    console.log(n);
    setTimeout(function () {
        controller.model.resizeBalls();
    }, Settings.ballCount * 500)
};

Controller.prototype.needRendering = function () {
    console.log('need rendering');
    this.view.render(this.model.objs);
};

var controller = new Controller(model, view);
controller.init();