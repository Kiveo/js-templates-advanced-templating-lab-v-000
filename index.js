function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredients) {
    return new Handlebars.SafeString(ingredients)
  });
  // compile and include source
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  // where and when to generate the template
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
