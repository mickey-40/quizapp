//create a quiz class
class Quiz {
  constructor(questions){
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
  }

  getQuestionIndex(){
    return this.questions[this.questionIndex];
  }
  
  guess(answer){
    if(this.getQuestionIndex().isCorrectAnswer(answer)){
      this.score++;
    }
    this.getQuestionIndex++;
  }

  isEnded(){
    return this.questionsIndex === this.questions.length;
  }
}

//Create a question class
class Question {
  constructor(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice){
    return this.answer === choice;
  }
}

// display question
function displayQuestion(){
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
};

// Guess function
function guess(id, guess){
  let button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    displayQuestion();
  }
};

//show quiz progess
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progessElement = document.getElementById("progress");
  progessElement.innerHTML = 
  `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// show score
function showScores () {
  let quizEndHtml =
  `
    <h1>Quiz Completed</h1>
    <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
      <a href="index.html">Take Quiz Again</a>
    </div>
  `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHtml;
}

// create quiz questions
let questions = [
  new Question(
      "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
  ),
  new Question(
      "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"
  ),
  new Question(
      "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"
  ),
  new Question(
      "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"
  ),
  new Question(
      "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"
  )
];

let quiz = new Quiz(questions);

//display quesiton
displayQuestion();