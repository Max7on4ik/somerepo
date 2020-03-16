var View = function () {
    this.elements = [];
};

View.prototype.renderObj = function (obj) {
    let item = document.createElement('div');
    item.classList.add('ball');
    item.style.left = `${obj.x}px`;
    item.style.top = `${obj.y}px`;
    item.style.width = `${obj.size}px`;
    item.style.height = `${obj.size}px`;
    item.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    document.body.appendChild(item);
    this.elements.push(item);
};

View.prototype.render = function (objs) {
    console.log('in view.render');
    this.elements.forEach(function (element, index) {
        console.log(objs[index].size);
        element.style.left = `${objs[index].x}px`;
        element.style.top = `${objs[index].y}px`;
        element.style.width = `${objs[index].size}px`;
        element.style.height = `${objs[index].size}px`;
        if (objs[index].needToHide)
        {
            element.style.animationName = 'hide';
            element.style.animationDuration = '2s';
            element.style.animationFillMode = 'forward';
        }
    });
};

var view = new View();