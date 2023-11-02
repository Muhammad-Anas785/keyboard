let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let send=document.querySelector('.btn-send');
let cut=document.querySelector('.btn-cut');
let message=document.querySelector('.show-msg')

buttons.forEach(function(button){
    button.addEventListener('click',letter)
})

function letter(e){
    let value = e.target.dataset.num;
    screen.value +=value;
}

function showMsg(){
    let answer = screen.value;
    message.value=answer;
}

function katao(){
    screen.value=screen.value.substring(0,screen.value.length-1);
   
}