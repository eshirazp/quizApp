var questionIdx = -1;
var correctQuestionCount = 0;
var questionsAndAnswers = [
  /*0*/ "Nets",
  /*1*/ "Lakers",
  /*2*/ "Cavs",
  /*3*/ "12",
  /*4*/ "Jerry West",
  /*5*/ "1",
  /*6*/ "Toronto",
  /*7*/ "Celtics",
  /*8*/ "2",
  /*9*/ "Lakers",
];

function revealQuestion(questionIdx) {
  $('.js-quiz-list').find('.question').addClass("hidden");
  
  if(questionIdx === 0)
    $('#0').removeClass("hidden");
  if(questionIdx === 1)
    $('#1').removeClass("hidden");
  if(questionIdx === 2)
    $('#2').removeClass("hidden");
  if(questionIdx === 3)
    $('#3').removeClass("hidden");
  if(questionIdx === 4)
    $('#4').removeClass("hidden");
  if(questionIdx === 5)
    $('#5').removeClass("hidden");
  if(questionIdx === 6)
    $('#6').removeClass("hidden");
  if(questionIdx === 7)
    $('#7').removeClass("hidden");
  if(questionIdx === 8)
    $('#8').removeClass("hidden");
  if(questionIdx === 9)
    $('#9').removeClass("hidden");
}

function updateResult(correctQuestionCount, questionIdx) {
  if(questionIdx === 9) {
    $('.js-quiz-list').html("Quiz is done<br>Final result: " + correctQuestionCount + " out of " + (questionIdx+1) + " questions");
  }
  else
    $('.js-result-count').html("You have so far answered " + correctQuestionCount + " out of " + (questionIdx+1) + " questions");
}

function compareAnswer(val, questionIdx) {
  if (val === questionsAndAnswers[questionIdx]) {
      correctQuestionCount++;
      $('.js-result').html("<p>That is correct!</p>");
    } else {
      $('.js-result').html("<p>That is wrong! Correct answer was: " + questionsAndAnswers[questionIdx] + "</p>");
    }
}

function showNext(questionIdx) {
  var delayMillis = 3000; //3 seconds
  setTimeout(function() {
    $('.js-result').empty();
    revealQuestion(questionIdx);
  }, delayMillis);
}

function mainCtrl() {
  var val;

  // Event Listener to start the quiz
  $('.js-test-start').click(function(event) {
    event.preventDefault();
    $('.js-start').addClass("hidden");
    revealQuestion(++questionIdx);
  });

  // Event Listeners to submit answer of each question
  $(".js-answer-submit").click(function(event) {
    event.preventDefault();
    val = $(this).closest('form').find('input:radio[name="question"]:checked').val();
    compareAnswer(val, questionIdx);
    updateResult(correctQuestionCount, questionIdx);
    questionIdx++;
    showNext(questionIdx);
  });
}


$(function() {
  mainCtrl();
});