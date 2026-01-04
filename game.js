let allQuestions = [];
let currentQuestionIndex = 0;
let score = 0;


function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function showQuestion(){
    const questionContainer = document.getElementById('question');
    const questionData = allQuestions[currentQuestionIndex];
    questionContainer.innerHTML = '';
    if(questionData === undefined){
        questionContainer.innerHTML = '<h2>No questions available for this category. Please select a different category.</h2>';
        return;
    }
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML=
    `<h2>${decodeHTML(questionData.question)}</h2>`;
    questionContainer.appendChild(questionElement);
}

async function loadQuizData() {
  
    const categoryIDs = localStorage.getItem('category');
  
    if (!categoryIDs) {
        window.location.href = 'categories.html';
        return;
    }

  
    const apiURL = `https://opentdb.com/api.php?amount=10&category=${categoryIDs}&difficulty=easy&type=multiple`;

    try {
        console.log("Fetching questions for category:", categoryIDs);
        const response = await fetch(apiURL);
        const data = await response.json();


        
        console.log("Success! Data received:");
        allQuestions = data.results;
        showQuestion();
        
        
        
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

loadQuizData();


