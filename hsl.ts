class Rainbox {

    private _hue: number;
    private _element: HTMLElement;

    constructor(element: HTMLElement) {

        this._hue = 0;
        this._element = element;
    }

    get hue() { return this._hue; }

    set hue(value: number) { this._hue = value; }

    render() {

        var color = `hsl(${this._hue}, 50%, 100%)`;
        this._element.style.backgroundColor = color;
    }
}

var element = document.getElementsByTagName("body")[0];
var box = new Rainbox(element);
var hue = 0;

setInterval(() => {

    box.render();
    box.hue = hue++;

}, 300);