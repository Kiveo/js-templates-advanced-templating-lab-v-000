function init() {
  //put any page initialization/handlebars initialization here
  // compile and include source
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
