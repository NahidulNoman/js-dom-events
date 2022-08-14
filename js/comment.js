document.getElementById('button').addEventListener('click',function(){
    const commentBox = document.getElementById('comment-box');
    const newComment = commentBox.value;
    
    const addParagraph = document.getElementById('paragraph');
    let p = document.createElement('p');
    p.innerText = newComment;

    addParagraph.appendChild(p);
    commentBox.value = '';
})