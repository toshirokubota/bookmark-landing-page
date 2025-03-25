const nav = document.getElementById('navbar');
const menu_button = document.getElementById('menu-button');
const hamburger = document.getElementById('hamburger-icon');
const close_icon = document.getElementById('close-icon');

menu_button.addEventListener('click', () => {
    nav.classList.toggle('shown');
    hamburger.classList.toggle('shown');
    close_icon.classList.toggle('shown');    
});

const faq = document.getElementById('faqs');
const questions = faq.querySelectorAll('.faq-question');
const answers = faq.querySelectorAll('.faq-answer');

for(let i=0; i<questions.length; ++i) {
    let q = questions[i];
    let a = answers[i];
    q.addEventListener('click', ()=> {
        a.classList.toggle('shown');
        q.querySelector('img').classList.toggle('shown');
    });
    q.addEventListener('keydown', (e)=> {
        if(e.code == 'Enter') {
            a.classList.toggle('shown');
            q.querySelector('img').classList.toggle('shown');
        }
    });
}

const feature_area = document.getElementById('feature-sections');
const features = feature_area.querySelectorAll('.feature-section');
const feature_list = document.getElementById('feature-list');
const items = feature_list.querySelectorAll('li');

for(let i=0; i<items.length; ++i) {
    let item = items[i];
    let f = features[i];
    item.addEventListener('click', () => {
        for(let j=0; j<items.length; ++j) {
            features[j].classList.remove('shown');
            items[j].classList.remove('shown');
        }
        f.classList.add('shown');
        item.classList.add('shown');
    });
    item.addEventListener('keydown', (e) => {
        if(e.code == 'Enter') {
            for(let j=0; j<items.length; ++j) {
                features[j].classList.remove('shown');
                items[j].classList.remove('shown');
            }
            f.classList.add('shown');
            item.classList.add('shown');
        }
    });
}

const isEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
}

const form = document.querySelector('form');
const email = form.querySelector('input[type="email"]');
const error_msg = form.querySelector('.error-msg');
const error_logo = form.querySelector('.error-logo');
form.addEventListener('submit', (e)=> {
    console.log('handling', email.value);
    if(!isEmail(email.value)) {
        error_msg.classList.add('shown');
        error_logo.classList.add('shown');
        e.preventDefault();
    } else {
        email.value='';
    }
});

email.addEventListener('focus', () => {
    error_msg.classList.remove('shown');
    error_logo.classList.remove('shown');
});
