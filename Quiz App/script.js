const questions = [
    {
      questions: "What is JavaScript?",
      answer: [
        { Text: "a:JavaScript is a scripting language used to make the website interactive", correct: true },
        { Text: "b: JavaScript is an assembly language used to make the website interactive", correct: false },
        { Text: "c: JavaScript is a compiled language used to make the website interactive", correct: false },
        { Text: "d: None of the mentioned", correct: false }
      ]
    },
    {
      questions: "Which of the following is correct about JavaScript?",
      answer: [
        { Text: "a : JavaScript is an Object-Based language", correct: true },
        { Text: "b : JavaScript is Assembly-language", correct: false },
        { Text: "c : JavaScript is an Object-Oriented language", correct: false },
        { Text: "d : JavaScript is a High-level language", correct: false }
      ]
    },
    {
      questions: "Among the given statements, which statement defines closures in JavaScript?",
      answer: [
        { Text: "a: JavaScript is a function that is enclosed with references to its inner function scope", correct: false },
        { Text: "b: JavaScript is a function that is enclosed with references to its lexical environment", correct: true },
        { Text: "c: JavaScript is a function that is enclosed with the object to its inner function scope", correct: false },
        { Text: "d: None of the mentioned", correct: false }
      ]
    },

    {
      questions: "Arrays in JavaScript are defined by which of the following statements?",
      answer: [
        { Text: "a: It is an ordered list of values", correct: true },
        { Text: "b: It is an ordered list of objects", correct: false },
        { Text: "c: It is an ordered list of string", correct: false },
        { Text: "d: It is an ordered list of functions", correct: false }
      ]
    },
    {
      questions: "What will be the output of the following JavaScript code?",
      code: "// JavaScript Comparison Operators\nfunction compare()\n{\n    let a=2;\n    let b=2.0;\n    if(a==b)\n        return true;\n    else\n        return false;\n}",
      answer: [
        { Text: "a: false", correct: false },
        { Text: "b: true", correct: true },
        { Text: "c: compilation error", correct: false },
        { Text: "d: runtime error", correct: false }
      ]
    },
    {
      questions: "What will be the output of the following JavaScript code snippet?",
      code: "// JavaScript Equalto Operators\nfunction equalto()\n{\n    let num=10;\n    if(num===\"10\")\n        return true;\n    else\n        return false;\n}",
      answer: [
        { Text: "a: false", correct: true },
        { Text: "b: true", correct: false },
        { Text: "c: compilation error", correct: false },
        { Text: "d: runtime error", correct: false }
      ]
    },
    {
      questions: "Will the following JavaScript code work?",
      code: "var js = (function(x) {return x*x;}(10));",
      answer: [
        { Text: "a: Exception will be thrown", correct: false },
        { Text: "b: Memory leak", correct: false },
        { Text: "c: Error", correct: false },
        { Text: "d: Yes, perfectly", correct: true }
      ]
    },
    {
      questions: "Which of the following is not a JavaScript data type?",
      answer: [
        { Text: "a: Null type", correct: false },
        { Text: "b: Undefined type", correct: false },
        { Text: "c: Number type", correct: false },
        { Text: "d: All of the mentioned", correct: true }
      ]
    }
  ];
  

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//Start Quiz
function startQuiz() 
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}
//Showing Questions
function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo +". "+currentQuestion.questions;

    currentQuestion.answer.forEach(answer =>{
        const button= document.createElement('button');
        button.innerHTML = answer.Text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });

}
function    resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct ==="true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
});
nextButton.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = "Quiz Over!<br> Your Score is "+score+"out of "+questions.length;
    answerButtons.style.display = 'none';
    nextButton.innerHTML = "Restart";
    nextButton.style.display ='Block';
// startQuiz();

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
 
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
