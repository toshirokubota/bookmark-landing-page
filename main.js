const hamburger = document.getElementById('hamburger-icon');
const close_icon = document.getElementById('close-icon');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
close_icon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const faq = document.getElementById('faqs');
const questions = faq.querySelectorAll('.faq-question');
const answers = faq.querySelectorAll('.faq-answer');

for(let i=0; i<questions.length; ++i) {
    let q = questions[i];
    let a = answers[i];
    q.addEventListener('click', ()=> {
        console.log('clicked', q);
        a.classList.toggle('shown');
        q.querySelector('img').classList.toggle('shown');
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
        console.log('clicked', item, features);
        for(let j=0; j<items.length; ++j) {
            features[j].classList.remove('shown');
        }
        f.classList.add('shown');
    });
}
