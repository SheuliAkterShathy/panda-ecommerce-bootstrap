// Answer to the question no-2
 const elements=document.getElementsByClassName('color-sblue');
 for(let element of elements){
element.style.color='steelblue';
}


// Answer to the question no-3
document.getElementById('backpack').style.backgroundColor='tomato';


// Answer to the question no-4
const radiuss=document.getElementsByClassName('style-radius');
for(let radius of radiuss){
radius.style.borderRadius='30px';
}


// Answer to the question no-5
document.getElementById('panda-btnn').addEventListener('click',function(){
    console.log('Something new')
})


// Answer to the question no-6
const items=document.getElementsByClassName('panda-btn-now');
for(const item of items){
item.addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})
}


// Answer to the question no-7
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const text=event.target.value;
    const submitButton=document.getElementById('submit-button');
    if(text==='email'){
       submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled',true);
    }
})
