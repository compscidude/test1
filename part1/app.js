var button = document.querySelector("#change");
var elems = document.querySelector("div");
/**
 * changes the color of the texts in the <div> element everytime the button is clicked.
 */
button.onclick = function() {

    // This is a way of checking if the button has been pressed for the first time or not. (.random class is acquired from the first execution)
    var randomElems = document.querySelectorAll('.random');

    if (randomElems.length > 0) {
        // we only have to change the style of the elements with class random. 
        for (var i = 0; i < randomElems.length; i++) {
            randomElems.item(i).setAttribute("style", "color:" + randomColor());
        }
    } else {

        var str = elems.innerHTML;
        var open = false;
        // create a new sequence of innerHTML starting from scratch.
        // Update the previous innerHTML of div with the new one after its finished wrapping text with span tags

        var elem = "";
        for (var token of str) {
            if (token == "<") {
                open = true;
                elem += "<";
            } else if (token == ">") {
                open = false;
                elem += ">";
            } else if (open) {
                elem += token;
            } else { // closed 
                if (token.trim(" ").length == 0) {
                    elem += token;
                } else {
                    elem += '<span class="random" style="color:' + randomColor() + '">' + token + '</span>';
                }
            }
        }
        elems.innerHTML = elem;
    }

    /**
     * random color generator in rgb format
     * @return: rgb(0~255,0~255,0~255);
     */
    function randomColor() {
        return "rgb(" + Math.floor((Math.random() * 255) + 1) + ", " + Math.floor((Math.random() * 255) + 1) + ", " + Math.floor((Math.random() * 255) + 1) + ");"
    }
    
}