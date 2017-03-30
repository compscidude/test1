

var options = {

    fonts: ['sans-serif', 'arial', "Times New Roman", "Georgia", "Serif"],

    colors: ['grey', 'blue', 'green', 'orange', 'gold'],

    size: ['1em', '1.2em', '1.4em', '1.6em', '1.8em', '2em'],

    randomProperty: function(type) {

        switch (type) {

            case "fontFamily":
                return this.fonts[Math.floor(Math.random() * this.fonts.length)];
                break;
            case "color":
                return this.colors[Math.floor(Math.random() * this.colors.length)];
                break;
            case "fontSize":
                return this.size[Math.floor(Math.random() * this.size.length)];
                break;
        }

    }
}

function textEditor() {

    var self = this,
        toolbar = document.querySelector('.nav-ul'),
        frameElement = document.getElementById("iframe"),
        frameContent = frameElement.contentWindow,
        frameDocument = frameElement.contentDocument;
        frameDocument.designMode = "On";
        

    // This is the initilization phase. 

    function init() {
        // initialization phase. Default options for the iframe content
        frameElement.contentWindow.document.body.style.color = 'black';
        frameElement.contentWindow.document.body.style.fontSize = "20px";
        frameElement.contentWindow.document.body.style.padding = "0 0 10px 0";

        frameContent.focus();
        frameContent.onblur = function() { frameDocument.designMode = "Off" };
        frameContent.onfocus = function() { frameDocument.designMode = "On" };
        toolbar.addEventListener('click', changeProperty, false);
    }

    function changeProperty(e) {
        var type = e.target.className;
        // currently [type] is set to either "fontFamily", "color", or "fontSize"
        frameElement.contentWindow.document.body.style[type] = options.randomProperty(type);
    }

    init();

}

var editor = new textEditor();