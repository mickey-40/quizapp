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