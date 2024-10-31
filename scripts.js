const formRating = document.querySelector('.ratings .card .main-content .content form');
const errorSubmit = document.querySelector('.card .content form > span')
const btnSubmit = document.querySelector('.card .content form .submit button');

const mainContent = document.querySelector('.ratings .card .main-content');
const submitContent = document.querySelector('.ratings .card .submit-content');
const submitRating = document.querySelector('.ratings .card .submit-content .rating-detail');

formRating.addEventListener('submit', function(e) {

    // obtener data form
    e.preventDefault();
    const formData = new FormData(this);
    const formEntries = Object.fromEntries(formData.entries());
    
    // mostrar error si no se selecciona rating
    if(!formEntries.rating){
        btnSubmit.style.backgroundColor = '#ff2929';
        btnSubmit.classList.add('shake');
        errorSubmit.classList.add('visible');
        setTimeout(() => {
            btnSubmit.classList.remove('shake');
        }, 1000);
        return;
    }

    // mostrar submit content y añadir rating
    mainContent.classList.add('move-hide');
    setInterval(() => {
        submitRating.innerHTML = `<p>You selected ${formEntries.rating} out of 5</p>`;
        submitContent.style.display = 'flex';
        mainContent.style.display = 'none';
        setInterval(() => {
            submitContent.classList.add('move-show');
        }, 50);
    }, 550);
    
});