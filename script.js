let input = document.getElementById("newTodoInput");
let list = document.getElementById("todoList");
let btn = document.getElementById("addTodoBtn");

btn.onclick = (()=>{
    if(input.value.length!=0){
        list.innerHTML+=`<li>${input.value}</li>`;
        input.value = '';
    }
})

// btn.disabled = false;
// console.log(btn);