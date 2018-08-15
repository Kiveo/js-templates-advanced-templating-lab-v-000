function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
