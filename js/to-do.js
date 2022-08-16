let count = 0;
document.getElementById('input-btn').addEventListener('click',function(){
    count++;
    let getText = document.getElementById('input-value');
    let textValue = getText.value;
    
    let mainContainer = document.getElementById('content-container');
    let tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `
          
            <th scope="row">${count}</th>
                <td>${textValue}</td>
                <td>
                 <button class="btn btn-primary delete-btn">Delete</button>
                <button class="btn btn-secondary lines">Edit</button>
                </td>
    `
    mainContainer.appendChild(tableContainer);
    getText.value = '';

    let deleteButton = document.getElementsByClassName('delete-btn');
    for(let button of deleteButton){
        button.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display = "none";
        })
    }
    let edit = document.getElementsByClassName('lines');
    for(let line of edit){
        line.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style. textDecoration = "line-through";
        })
    }
})
document.getElementById('clear-btn').addEventListener('click',function(){
    let mainContainer = document.getElementById('content-container');
    mainContainer.style.display = 'none';
})