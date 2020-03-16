var View = function () {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
};

View.prototype.render = function (objs) {
    view.ctx.clearRect(0, 0, view.canvas.width, view.canvas.height);
    objs.forEach(function (element, index) {
        if (!element.needToHide) {
            view.ctx.beginPath();
            view.ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
            view.ctx.fillStyle = element.color;
            view.ctx.fill();
            view.ctx.closePath();
        }
    });
    let count = 0;
    objs.forEach(function (el) {
        if (el.needToHide) count++;
    });
    console.log(count);
    if (count === Settings.ballCount - 1)
        view.ctx.clearRect(0, 0, view.canvas.width, view.canvas.height);
};

var view = new View();