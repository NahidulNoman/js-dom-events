function changeEvent(){
    const changeThing = document.getElementById('change');
    changeThing.innerText = 'Yes i change text using dom!!!'
}

document.getElementById('this-can').addEventListener('click',function(){
    let headerChange = document.getElementById('change');
    headerChange.innerText = 'This change using add event listener!!'
})