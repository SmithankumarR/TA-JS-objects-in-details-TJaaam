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
}; // implicit returns 

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

// test the function
let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );