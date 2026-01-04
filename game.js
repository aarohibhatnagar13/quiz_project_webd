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
        const questions = data.results;
        for (let i = 0; i < questions.length; i++) {      
            console.log(`Q${i + 1}: ${questions[i].question}`);
        }
        
        
        
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

loadQuizData();

