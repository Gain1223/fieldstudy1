document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const article = button.parentElement;
            const content = article.querySelector('p');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                button.textContent = 'Read More';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                button.textContent = 'Show Less';
            }
        });
    });
});
