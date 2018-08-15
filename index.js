function init() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
   Handlebars.registerHelper('displayIngredient', function(ingredients) {
     return new Handlebars.SafeString(ingredients)
   });
   var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  // where and when to generate the template
  // document.getElementsByTagName("main")[0].innerHTML += formTemplate;
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
