const categoryMap = {
    'gk': 9,
    'geography': 22,
    'entertainment': 11,
    'history': 23,
    'gadgets': 30,
    'art': 25,
    'politics': 24,
    'sports': 21,
    'mythology': 20
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