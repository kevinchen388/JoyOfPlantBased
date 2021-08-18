// Changes the hero text after set interval
// The Joy of Plant Based Living
var text = ["Living", "Eating", "Cooking", "Nutrition", "Recipes"];
var counter = 1;
var elem = $("#change_text");
setInterval(change, 5000);

function change() {
    elem.fadeOut(1000, function() {
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) {
            counter = 0;
        }
        elem.fadeIn(800);
    });
}