const textbox = document.getElementById(`textbox`);
const create = document.getElementById(`add`);
const tasks = document.querySelector(`.tasks`);
const notasks = document.querySelector(`.notasks`);

function createTasks(){
    const task = textbox.value.trim();
    textbox.value = '';

    if(!task) return;

    notasks.style.display = `none`;

    const wrapper = document.createElement(`div`);
    wrapper.classList.add(`task`);

    const checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    checkbox.classList.add(`task-checkbox`);

    const span = document.createElement(`span`);
    span.textContent = task;
    span.classList.add(`real-task`);

    wrapper.appendChild(checkbox);
    wrapper.appendChild(span);

    tasks.appendChild(wrapper);

    checkbox.addEventListener(`change`, () => {
    if(checkbox.checked){
        wrapper.classList.replace(`task`, `completed`);
            
        const status = document.createElement(`p`);
        status.classList.add(`status`);
        status.textContent = `(completed)`;
        wrapper.appendChild(status);
            
        span.classList.replace(`real-task`, `striked`);
            
        setTimeout(() => {
                wrapper.remove();
                emptytasks();
            }, 1000);
        }
    })

    emptytasks();
}

create.addEventListener(`click`, createTasks);
textbox.addEventListener(`keypress`, event => {
    if(event.key === `Enter`){
        createTasks();
    }
})

emptytasks();

function emptytasks(){
    if(tasks.children.length === 0){
        notasks.style.display = `block`;
    }
    else{
        notasks.style.display = `none`;
    }
}

