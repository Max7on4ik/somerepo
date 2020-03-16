var View = function () {
    this.elements = [];
    this.root = document.querySelector('svg');
};

View.prototype.renderObj = function (obj) {
    let item = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    item.classList.add('ball');
    item.setAttribute('cx', obj.x);
    item.setAttribute('cy', obj.y);
    item.setAttribute('r', obj.size);
    item.setAttribute('fill', `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`);
    this.root.appendChild(item);
    this.elements.push(item);
};

View.prototype.render = function (objs) {
    console.log('in view.render');
    this.elements.forEach(function (element, index) {
        element.setAttribute('cx', objs[index].x);
        element.setAttribute('cy', objs[index].y);
        element.setAttribute('r', objs[index].size);
        if (objs[index].needToHide)
        {
            element.style.animationName = 'hide';
            element.style.animationDuration = '2s';
            element.style.animationFillMode = 'forward';
        }
    });
};

var view = new View();