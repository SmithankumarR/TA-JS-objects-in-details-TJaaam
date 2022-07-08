// prototypal method
let questionMethods = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerindex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerindex];
  },
};

function Question(title, options, correctAnswerindex) {
  let question = Object.create(questionMethods);
  
  question.title = title;
  question.options = options;
  question.correctAnswerindex = correctAnswerindex;

  return question;
}

// pseudoclassical pattern
function Question(title, options, correctAnswerindex) {
  let question = Object.create(createQuestion.prototype);
  question.title = title;
  question.options = options;
  question.correctAnswerindex = correctAnswerindex;
  return question;
}
Question.prototype = {
  isAnswerCorrect(index) {
    return index === question.correctAnswerindex;
  },
  getCorrectAnswer() {
    return question.options[question.correctAnswerindex];
  },
};
// after using new keyword
function Question(title, options, correctAnswerindex) {
  this.title = title;
  this.options = options;
  this.correctAnswerindex = correctAnswerindex;
}
Question.prototype = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerindex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerindex];
  },
};

//   oraganize using class
class Question {
  constructor(title, options, correctAnswerindex) {
    this.title = title;
    this.options = options;
    this.correctAnswerindex = correctAnswerindex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerindex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerindex];
  }
}
