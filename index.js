// ALL PAGES

// START PAGE

// Current question and score are both zero.
  let questionIndex = 0;
  
// First question
  
  let questionCount = 1;
  
// Update question counter 

  function updateQCount(){
    questionCount += 1;
    $('.q-counter span').html(questionCount);
  }
  
  let scoreCount = 0;

// User clicks start --> First question with choices generated. Start page is hidden.
  function generateQuestions (){
    if(questionIndex < questions.length){
       $('.quiz-question-choices').html(`<form id="form-questions">
        <div class="form-head"><h3>${questions[questionIndex]}</div></h3>
        <div class="label-wrap">
          <fieldset name="quiz-answer-choices">
          <label>
            <input required type="radio" name="choice" value="${possibleAnswers[questionIndex][0]}" class="answer"><span>${possibleAnswers[questionIndex][0]}</span><br>
          </label>
          
          <label>
            <input type="radio" name="choice" value="${possibleAnswers[questionIndex][1]}" class="answer"><span>${possibleAnswers[questionIndex][1]}</span><br>
          </label>
          
          <label>
            <input type="radio" name="choice" value="${possibleAnswers[questionIndex][2]}" class="answer"><span>${possibleAnswers[questionIndex][2]}</span><br>
          </label>
          
          <label>
            <input type="radio" name="choice" value="${possibleAnswers[questionIndex][3]}" class="answer"><span>${possibleAnswers[questionIndex][3]}</span><br>
          </label>
          
          <label>
            <input type="radio" name="choice" value="${possibleAnswers[questionIndex][4]}" class="answer"><span>${possibleAnswers[questionIndex][4]}</span><br>
          </label>
        </div>
        <div class="form-submit">
          <button type="submit">CONTINUE</button>
        </div
      </form>`);
    }

    $('#form-questions').submit(function(e){
        e.preventDefault();
        const choiceVal = $('input[name=choice]:checked').val();
        if (choiceVal === correctAnswers[questionIndex]){
          updateScore();
          feedback();
          nextQuestion();
        } else {
          feedback();
          nextQuestion();
        }
      });
  }
  
  function hideStart(){
    $('.quiz-start-container').hide();
  }
  
  function startQuiz(){
      $('.start').on('click', function(){
        $('.q-counter span').html(`${questionCount}`);
        $('.s-counter span').html(`${scoreCount}`);
        hideStart();
        generateQuestions();
      });
    }
    startQuiz();
 
// QUESTION PAGE(S)
  
// User clicks "SUBMIT" --> Selected choice is checked against correct choice.
  
  function feedback(){
    const choiceVal = $('input[name=choice]:checked').val();
    userChoices.push(choiceVal);
    console.log(userChoices);
    if (choiceVal === correctAnswers[questionIndex]){
          $('.quiz-question-choices #form-questions').html(`<div class="question-feedback"><h3>Nice one!</h3>
          <p>You chose <strong>${choiceVal}</strong> and that's correct. Keep it moving!</p>
          <a href="#" class="next"><p>NEXT</p></a></div>`);
        } else {
          $('.quiz-question-choices #form-questions').html(`<div class="question-feedback"><h3>Whoops! Sorry, buddy.</h3>
          <p>You chose <strong>${choiceVal}</strong>, but the correct answer was <strong>${correctAnswers[questionIndex]}</strong></p>
          <a href="#" class="next"><p>NEXT</p></a></div>`);
        }
  }
  
// Score updates accordingly.
  function updateScore(){
    const choiceVal = $('input[name=choice]:checked').val();
    if (choiceVal === correctAnswers[questionIndex]){
      scoreCount += 1;
      $('.s-counter span').html(scoreCount);
    } else {
      scoreCount = scoreCount;
    }
  }

// Whether correct or incorrect --> "Next" to move on to next question in order.
  function nextQuestion(){
    $('.next').on('click', function(){
      if (questionCount < questions.length){
        updateQuestion();
        generateQuestions();
        updateQCount();
      } else {
        finalScore();
      }
    });
  }
  
// Question number updates accordingly.
  function updateQuestion(){
    questionIndex += 1;
    $('.q-counter span').html(`${questionIndex}`);
    console.log(questionIndex);
  }


// RESULTS    
// User clicks "Next" after feedback for last question --> Final results displayed with feedback and RESTART link is visible.
  function finalScore(){
    
    if (scoreCount < 6){
      const restartURL = `<a href="#" class="restart"><p>RESTART</p></a>`;
      $('#form-questions').html(`<p class="final-feedback">Looks like you have more training to do. You'll do better next time.</p>`);
      $('#form-questions').append(`'<br><video controls autoplay> <source src="video/ryu_countdown_full.mp4" type="video/mp4"></video>
        <h1 class="review">Answer Review</h1>'`);
      answerDivLeft();
      answerDivRight();
      showUserAnswersLeft();
      showUserAnswersRight();
      $('#form-questions').append(restartURL);
      restartQuiz();
    } else if (scoreCount >= 6 && scoreCount < 9) {
      const restartURL = `<a href="#" class="restart"><p>RESTART</p></a>`;
      $('#form-questions').html(`<p class="final-feedback">Now, you're really charging up!</p>`);
      $('#form-questions').append(`'<br><img src="http://24.media.tumblr.com/74952a57c57dc2a39403e57fa67a686b/tumblr_mt83tuZkV11sfiik5o1_400.gif" alt="Charging fireball">'`);
      answerDivLeft();
      answerDivRight();
      showUserAnswersLeft();
      showUserAnswersRight();
      $('#form-questions').append(restartURL);
      restartQuiz();
    } else {
      const restartURL = `<a href="#" class="restart"><p>RESTART</p></a>`;
      $('#form-questions').html(`<p class="final-feedback">You're a master!</p>`);
      $('#form-questions').append(`'<br><video controls autoplay> <source src="video/hadouken.mp4" type="video/mp4"></video>'`);
      answerDivLeft();
      answerDivRight();
      showUserAnswersLeft();
      showUserAnswersRight();
      $('#form-questions').append(restartURL);
      restartQuiz();
    }
  }
  
// List of chosen answers generates.
  function answerDivLeft (){
    for(let i = 0; i < 5; i += 5){
      $('#form-questions').append(`<div class="column-left"></div>`);
    }
  }

  function answerDivRight (){
    for(let i = 5; i < 10; i += 5){
      $('#form-questions').append(`<div class="column-right"></div>`);
    }
  }

  function showUserAnswersLeft(){
    for (let i = 0; i < 5; i++){
      $('.column-left').append(`
        <p class="questions">${i + 1}. ${questions[i]}</p> 
        <p>You chose <strong>${userChoices[i]}</p></strong>
        <p>The correct answer was <strong>${correctAnswers[i]}</strong></p>`);
    }
  }

  function showUserAnswersRight(){
    for (let i = 5; i < 10; i++){
      $('.column-right').append(`
        <p class="questions">${i + 1}. ${questions[i]}</p> 
        <p>You chose <strong>${userChoices[i]}</p></strong>
        <p>The correct answer was <strong>${correctAnswers[i]}</strong></p>`);
    }
  }

  function restartQuiz(){
    $('.restart').on('click', function(){
        scoreCount = 0;
        $('.s-counter span').html(`${scoreCount}`);
        questionCount = 1;
        $('.q-counter span').html(`${questionCount}`);
        questionIndex = 0;
        userChoices.length = 0;
        generateQuestions();
      });
  }