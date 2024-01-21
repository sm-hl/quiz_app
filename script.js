//data
let data = [
    {
        question:"What does CSS stand for?",
        answer1:["Cascading Style Sheets",true,"not checked"],
        answer2:["Computer Style Sheets",false,"not checked"],
        answer3:["Creative Style Sheets",false,"not checked"],
        answer4:["Colorful Style Sheets",false,"not checked"],
    },
    {
        question:"What is the correct HTML for referring to an external style sheet?",
        answer1:["&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"&gt;",true,"not checked"],
        answer2:["&lt;style src=\"mystyle.css\"&gt;",false,"not checked"],
        answer3:["&lt;stylesheet>mystyle.css</stylesheet&gt;",false,"not checked"],
        answer4:["&lt;stylesheet>mystyle.css wsdsp</stylesheet&gt;",false,"not checked"],
    },
    {
        question:"Which HTML attribute is used to define inline styles?",
        answer1:["Style",true,"not checked"],
        answer2:["Class",false,"not checked"],
        answer3:["Styles",false,"not checked"],
        answer4:["Fonts",false,"not checked"],
    },
    {
        question:"How do you insert a comment in a CSS file?",
        answer1:["// this is a comment",false,"not checked"],
        answer2:["/* this is a comment */",true,"not checked"],
        answer3:["' this is a comment",false,"not checked"],
        answer4:["// this is a comment //",false,"not checked"],
    }
];

let questionNbr = document.querySelector('.questionNbr');
let question = document.querySelector('.question');
let checkboxAnswer = document.querySelectorAll('.checkboxAnswer');
let labelAnswer = document.querySelectorAll('.labelAnswer');

let alertMessage = document.querySelector('.alert');
let alertClose = document.querySelector('.close');

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let submit = document.querySelector('.send');

let count = 0;
let score = 0;

//function to show data
function showQuestion(nbr){
    questionNbr.innerHTML = nbr+1;
    question.innerHTML = data[nbr].question;
    for (let i = 0; i < labelAnswer.length; i++) {
        labelAnswer[i].innerHTML = data[nbr]['answer'+String(i+1)][0];
        // labelAnswer[i].innerHTML = data[nbr].answer2;
        // labelAnswer[i].innerHTML = data[nbr].answer3;
        // labelAnswer[i].innerHTML = data[nbr].answer4;
    }
}

//function to initialize checkbox
function initCheckbox(){
    for (let i=0; i<checkboxAnswer.length; i++){
        checkboxAnswer[i].checked = false;
    }
}

//function to save checked answers
function saveCheckedAnswers(nbr) {
    for (let i=0; i<checkboxAnswer.length; i++){
        if ( checkboxAnswer[i].checked ) {
            data[nbr]['answer'+String(i+1)][2]='checked';
        }
    }
}

//function to show checked answers ================A verifier======================
function showCheckedAnswers(nbr) {
    for (let i=0; i<checkboxAnswer.length; i++){
        if ( data[nbr]['answer'+String(i+1)][2]=='checked' ) {
            checkboxAnswer[i].checked;
        }
    }
}

//function to show score 
function yourScore() {
    //get the correct answer
    for(let i=0; i<data.length; i++){
        for(let j=0; j<4; j++){
            if( (data[i]['answer'+String(j+1)][2]=='checked') && (data[i]['answer'+String(j+1)][1]==true) ){
                score++;
            }
        }
        
    }
    return score;
}

//show next question if we checked one answer
showQuestion(count);//first question

next.addEventListener('click',function(){
    if(checkboxAnswer[0].checked || checkboxAnswer[1].checked || checkboxAnswer[2].checked || checkboxAnswer[3].checked){
        saveCheckedAnswers(count);//save answers
        count++;
        if(count < data.length){
            alertMessage.classList.add('hidden');
            showQuestion(count);
            initCheckbox();
            showCheckedAnswers(count);
        }else{
            count--;
            alert(yourScore());
        }
    }else{
        alertMessage.classList.remove('hidden');
    }
});

//prev button
prev.addEventListener("click", function () {
    count--;
    if(count >= 0){
        // alertMessage.classList.add('hidden');
        showQuestion(count);
        showCheckedAnswers(count)
    }else{
        count++;
    }
});

//close alert
alertClose.addEventListener("click", function() {
    alertMessage.classList.add('hidden');
});
