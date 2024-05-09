var $ = document;

function toast(text) {
  var popup = getPopupProvider();
  popup.showToast(text);
}

function node(id) {
 return $.getElementById(id);
}