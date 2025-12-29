const categoryMap = {
    'gk': 9,
    'geography': 22,
    'entertainment': 11,
    'history': 23
};

const buttons = document.querySelectorAll('.category');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const categoryIdName = button.id;
        const categoryNumber = categoryMap[categoryIdName];
        
        
        localStorage.setItem('category', categoryNumber);
        
       
        window.location.href = 'game.html';
    });
});