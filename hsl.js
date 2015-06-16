var Rainbox = (function () {
    function Rainbox(element) {
        this._hue = 0;
        this._element = element;
    }
    Object.defineProperty(Rainbox.prototype, "hue", {
        get: function () {
            return this._hue;
        },
        set: function (value) {
            this._hue = value;
        },
        enumerable: true,
        configurable: true
    });
    Rainbox.prototype.render = function () {
        var color = `hsl(${this._hue}, 50%, 100%)`;
        this._element.style.color = color;
    };
    return Rainbox;
})();
document.addEventListener("DOMContentLoaded", function (e) {
    var element = document.getElementById("box");
    var box = new Rainbox(element);
    var hue = 0;
    setInterval(function () {
        box.render();
        box.hue = hue++;
    }, 300);
}, false);
