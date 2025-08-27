const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const gradients = {
    grey: 'linear-gradient(130deg, #909090 60%, #b5b5b5 100%)',
    white: 'linear-gradient(120deg, #fff 60%, #f0f0f0 100%)',
    blue: 'linear-gradient(120deg, #142adb 60%, #5f6fed 100%)',
    yellow: 'linear-gradient(125deg, #fff840 65%, #ffd700 100%)'
};

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const color = e.target.id;
        if (gradients[color]) {
            body.style.background = gradients[color];
        }
    });
});
