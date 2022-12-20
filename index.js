var readlineSync = require("readline-sync");
var score = 0;
console.log("...........QUIZ...........")
var input = readlineSync.question("\n what's your name?");
console.log("\n welcome " + input + " LETS HAVE FUN.....");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  //console.log("here are options")
  if (userAnswer === answer) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong,","the answer is ", answer);

  }
  console.log("you scored ", score);
  console.log("-------")
}
var questions = [{
  question: "\nWhat is always coming but never arrives? \n   here are the options \n a) today \n b) tomorrow \n c) yesterday\n",
  answer: "tomorrow"
},
{
  question: "What is it that lives if it is fed, and dies if you give it a drink?",
  answer: "fire"
},
{
  question: "What never asks a question but gets answered all the time?",
  answer: "mobile"
},
{
  question: "What has a face and two hands, but no arms or legs?",
  answer: "clock"
},
{
  question: "Thanks to me, you can see straight through the wall. What am I? ",
  answer: "window"
}];

//looping
for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
//console.log("wow you scored...."+score);

if (score > 0) {
  console.log("amazing you scored  " + score)
} else {
  console.log("try again..........")
}