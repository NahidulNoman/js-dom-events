document.getElementById('input-text').addEventListener('keyup',function(event){
    let text = event.target.value;
    let deleteButton = document.getElementById('button');
    if(text === 'Delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true)
    }
})
document.getElementById('button').addEventListener('click',function(){
    let thisText = document.getElementById('this-text');
    thisText.style.display = 'none';
    document.getElementById('input-text').value = '';
    document.getElementById('button').setAttribute('disabled',true)
})