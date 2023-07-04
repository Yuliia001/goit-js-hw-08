import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]')
}
const { form, input, textarea } = refs;
const LS_KEY = 'feedback-form-state';


const data = {};

function handlerGetInput() {
    const savedInput = JSON.parse(localStorage.getItem(LS_KEY));
    // console.log(savedInput);
    if (savedInput) {
        input.value = savedInput.email;
        textarea.value = savedInput.message;
    } 
}
handlerGetInput();

form.addEventListener('input', throttle(handlerSetInput, 500));
function handlerSetInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(data));
}

form.addEventListener('submit', handlerClear);
function handlerClear(evt) {
    evt.preventDefault();
    if (input.value && textarea.value) {
        console.log(data);
        form.reset();
        localStorage.removeItem(LS_KEY);
 
     }
    else {
        alert('всі поля повинні бути заповнені');
  }
    
}




