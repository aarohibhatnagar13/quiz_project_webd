let allQuestions = [];
let currentQuestionIndex = 0;
let score = 0;


function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function showResult(){
    const questionContainer = document.getElementById('question');
    questionContainer.innerHTML = 
    `<h2>Your Score: ${score} / ${allQuestions.length}</h2> `
}
function showQuestion(){
    const questionContainer = document.getElementById('question');
    if(!questionContainer) return;
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

    const answers = [...questionData.incorrect_answers,questionData.correct_answer];
    answers.sort(() => Math.random() - 0.5);
    answers.forEach(answer => {
        const answerBtn = document.createElement('button');
        answerBtn.classList.add('answer-btn');
        answerBtn.innerText = decodeHTML(answer);
        answerBtn.addEventListener('click', () => {
            if(answer === questionData.correct_answer){
                score++;
            }
            currentQuestionIndex++;
            if(currentQuestionIndex < allQuestions.length){
                showQuestion();
            }else{
                showResult();
            }
        });
        questionContainer.appendChild(answerBtn);
    });
}

async function loadQuizData() {
  
    const categoryIDs = localStorage.getItem('category');
  
    if (!categoryIDs) {
        window.location.href = 'categories.html';
        return;
    }

  
    const apiURL = `https://opentdb.com/api.php?amount=10&category=${categoryIDs}&type=multiple`;

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


