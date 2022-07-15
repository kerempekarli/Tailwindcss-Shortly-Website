const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')

linkForm.addEventListener('submit', formSubmit)

function validURL(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

function formSubmit(e){
    e.preventDefault();

    if(input.value == ''){
        errMsg.innerHTML = 'Please enter someting';
        input.classList.add('border-red')
    }
    else if(!validURL(input.value)){
        errMsg.innerHTML = 'Please enter a valid URL';
        input.classList.add('border-red')        
    }
    else{   
        errMsg.innerHTML = '';
        input.classList.remove('border-red')
        alert('Success')
    }
}

btn.addEventListener('click',navToggle)

function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}