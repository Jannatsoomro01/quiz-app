const question = [
    {
        Question: "which is largest animal in the world?",
        answers: [

            { Text: "Shark", correct: true },
            { Text: "Blue whale", correct: false },
            { Text: "Elephent", correct: false },
            { Text: "Giraffe", correct: false },

        ]
    },
    {
        Question: "which is the smallest continent in the world ? " ,
        answers: [

            { Text: "Asia", correct: false },
            { Text: "Austraila", correct: true },
            { Text: "Arctic", correct: false },
            { Text: "Africa", correct: false },

        ]
    },
    // {
    //     Question: "Kot Diji fort is in which district of sindh?",
    //     answers: [

    //         { Text: "Thatta", correct: false },
    //         { Text: "khairpur", correct: true },
    //         { Text: "Hyderabad", correct: false },
    //         { Text: "karachi", correct: false },
    //     ]

    // }


];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");



let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion. 
    Question;

     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

     });


}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
         answerButtons.removeChild(answerButtons.firstChild);
    }
}




 function selectAnswer(e){
    const selectAnswer = e.traget;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 

    } else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

 }


  function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out  of ${question.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
  }
function hendleNextButtons(){
    correctQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();

    }else{
        showScore();
    }
}

 nextButton.addEventListener("click", ()=>{
    
    if(currentQuestionIndex < questions.length){
        hendleNextButtons();
    }else{
        startQuiz();
    }
 })
startQuiz();