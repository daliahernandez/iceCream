$(document).ready(function(){
  $('form#userInput').submit(function(event){
    var idTags = ["fOne", "fTwo"];

    idTags.forEach(function(idTags){
      var userInput = $('input#' + idTags).val();
      $('.' + idTags).text(userInput);
    });

    event.preventDefault();
  });
});
