var questions = [
    {
        question: "HTML Stands For",
        answer: "Heyper Text Markup Language",
        options: [
            "1) Hyper Text Markup Language",
            "2) Hyper Text Mixkup Language",
            "3) Hyper Text Markwidth Language",
            "4) None Of These",
        ]
    },
    {
        question: "CSS Stands For",
        answer: "Cascading Style Sheet",
        options: [
            "1) Cascading Style Sheet",
            "2) Cyber security system",
            "3) Cascading style system",
            "4) Cascading system sheet",
        ]

    },
    {
        question: "HTML is what type of language ?",
        answer: "Markup Language",
        options: [
            "1) Scripting Language",
            "2) Markup Language",
            "3) Programming Language",
            "4) Network Protocol",
        ]
    },

    {
        question: "RAM Stands For",
        answer: "Random Access Memory",
        options: [
            "1) Random Access Memory",
            "2) Random Applied Memory",
            "3) Random Apply Memory",
            "4) Row Apply Mind",
        ]

    },
    
    {
        question: "The year in which HTML was first proposed _______",
        answer: "1990",
        options: [
            "1) 1990",
            "2) 1980",
            "3) 2000",
            "4) 1995",
        ]

    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        answer: "img",
        options: [
            "1) picture",
            "2) img",
            "3) image",
            "4) src",
        ]

    },
] 
function showelement(e){
    var questionElement = document .getElementById('questionElemnt');
    questionElement.innerHTML =questions[e].question; 

    var optionElement = document.getElementsByClassName("optionElement");
    for (var i = 0; i < optionElement.length; i++){
        optionElement[i].innerHTML = questions[e].options[i]
    }
}
var questionCount = 0;
function nextQuestion(){
questionCount++;
    console.log(questionCount)
    showelement(questionCount);        
    
}

var scoreval = document.getElementById("optionElement");
var IndexVal = 0;
function score(){
    IndexVal++;
    scoreval.innerHTML = IndexVal;
}