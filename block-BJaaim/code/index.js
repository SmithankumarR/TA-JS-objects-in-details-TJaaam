let rootElm = document.querySelector(".questions");

class Question {
    constructor(Title, Options, Correct_answer){
     let quiz_Question = new Quizz(Title,Options,Correct_answer);
        this.Questions.push(quiz_Question)
    }
    isCorrect(answer){
        return (this.Correct_answer == answer)
    }
    getCorrectAnswer(){
        return this.Correct_answer;
    }
    createUI(){

    }
}
class Quizz {
    constructor(allQuestions = [], activeIndex, score){
        this.Questions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
        this.createUI = this.createUI();
    }
    nextQuestion(){

    }
    createUI(){
        rootElm.innerHTML = "";
        let Question = document.createElement('h2');
        Question.innerText = this.Title;
        let Options = document.createElement('li');
        let answer = document.createElement('input');
        answer.type = "radio";
        answer.innerText = this.Options;
        Options.append(answer)
        let Submit = document.createElement('button');
        Submit.innerText = "submit";
        rootElm.append(Question,Options,Submit);
    }
    updateScore(){

    }
}