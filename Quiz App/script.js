const questions = [
    {
        questions: "Which is the largest animal in the world",
        answer: [
            {Text:"Shark",correct:false},
            {Text:"Blue Whale",correct:true},
            {Text:"Giraffe",correct:false},
            {Text:"Elephant",correct:false},
        ]
    },
    {
        questions: " Second Which is the largest animal in the world",
        answer: [
            {Text:"Shark",correct:false},
            {Text:"Blue Whale",correct:true},
            {Text:"Giraffe",correct:false},
            {Text:"Elephant",correct:false},
        ]
    }
    ,    {
        questions: "Third Which is the largest animal in the world",
        answer: [
            {Text:"Shark",correct:false},
            {Text:"Blue Whale",correct:true},
            {Text:"Giraffe",correct:false},
            {Text:"Elephant",correct:false},
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
