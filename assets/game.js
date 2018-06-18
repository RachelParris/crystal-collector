// Generate random number between 10 - 100
var compChoice = Math.floor(Math.random() * ((100 - 10) +1) + 10);
var c1 = randomNum();
var c2 = randomNum();
var c3 = randomNum();
var c4 = randomNum();

// Add values to the DOM
var compDiv = $(".computer-choice").val(compChoice).text(compChoice);
var c1Div = $(".crystal1").val(c1);
var c1Div = $(".crystal2").val(c2);
var c1Div = $(".crystal3").val(c3);
var c1Div = $(".crystal4").val(c4);
var result = 0; 
var wins = 0;
var losses = 0;

function randomNum () {
    var max = compChoice
    // Random number between 1 and the compChoice
    var num = Math.floor(Math.random() * max) + 1;
    return num;
}

function reset() {
     compChoice = Math.floor(Math.random() * ((100 - 10) +1) + 10);
     c1 = randomNum();
     c2 = randomNum();
     c3 = randomNum();
     c4 = randomNum();

    compDiv = $(".computer-choice").val(compChoice).text(compChoice);
    c1Div = $(".crystal1").val(c1);
    c1Div = $(".crystal2").val(c2);
    c1Div = $(".crystal3").val(c3);
    c1Div = $(".crystal4").val(c4);
    result = 0; 
    $(".sum").text("");
    console.log({ compChoice, c1, c2, c3, c4 });
}

$(".crystals").click(function() {
	var num = $(this).val();
  result += parseInt(num);
  $(".sum").text(result);  
  
  if (result === compChoice) {
      wins++;
      $(".wins").text(wins);
      $(".game").text("You won! :)");
      reset();
  } else if (result > compChoice) {
      losses++;
      $(".losses").text(losses);
      $(".game").text("You lost! :(");
      reset();
  }
});