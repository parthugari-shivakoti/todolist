
function add(){
    let todolist = document.querySelector('.container');
    let x = document.createElement('p');
    var text = document.querySelector('.input-text').value;
    if(text == ''){
        return;
    }else{
    x.innerHTML = text;
    console.log(text)
    let div = document.createElement('div');
    div.classList.add('task');
    let im1 = document.createElement('img');
    im1.src = "/images/tick1.png";
    im1.classList.add('tick');
    let im2 = document.createElement('img');
    im2.src = "/images/trash.png";
    im2.classList.add('trash');
    div.appendChild(x);
    div.appendChild(im1);
    div.appendChild(im2);
    todolist.appendChild(div);
    im2.addEventListener('click', () => {
        todolist.removeChild(div);
    });
    im1.addEventListener('click', () => {
        x.classList.add('read');
    });
    setTimeout(clear,500);
}
}
function clear(){
    let x = document.querySelector('.input-text');
    x.value = "";
}
