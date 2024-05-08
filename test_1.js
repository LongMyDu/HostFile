var $ = document;
var popup = getPopupProvider();

function toast(text) {
    popup.showToast(text);
}

function node(id) {
   return $.getElementById(id);
}

function func_1() {
    node("test_1").style.backgroundColor = "bisque";
    getPopupProvider().showToast("Hellooo! This is function 1 downloaded.")
}