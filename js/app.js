// Variables
const addTaskBtn = document.getElementById('addTaskBtn');
const taskContainer = document.getElementById('task_container');
const inputTask = document.getElementById('task_input');
const errorAlert = document.getElementById('alert');

// Add event listener
addTaskBtn.addEventListener("click", function(evt) {
    evt.preventDefault();

        // Create task parent element
        let task = document.createElement('ul');
        task.classList.add('task')

        // Create task
        let li = document.createElement('li');
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);

        // Creat check button
        let checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add('checkTask');
        li.appendChild(checkButton);

        // Creat delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('deleteTask');
        li.appendChild(deleteButton);

        // Creat condition for if input field is empty 
        if(inputTask.value === "") {
            showError();
        } else {
            taskContainer.insertBefore(task, taskContainer.childNodes[0]);
        }

        //empty input field when button is clicked
        inputTask.value = "";

        // Add event listener to check button
        checkButton.addEventListener('click', function(){
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;

            var id = parent.id;

            var target = (id === 'task_container') ? 
            document.getElementById('doneTaskContainer')
            :document.getElementById('task_container');

            item.classList.add('item');
            parent.removeChild(item)
            target.insertBefore(item, target.childNodes[0]);
        })

        // Add event listener to delete button
        deleteButton.addEventListener('click', function(){    
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;

            parent.removeChild(item);
        })

        //Local storage
        localStorage.setItem('value', inputTask.value);
        // li = localStorage.getItem('tasks');
        console.log(localStorage.getItem('value'));
})

// Create function for error message
function showError() {
    let errorDiv = document.createElement('div');
        errorDiv.classList.add('error');

        const container = document.querySelector('.container');
        const nav = document.querySelector('.input_container');

       errorDiv.appendChild(document.createTextNode('Please add a task.'))

       container.insertBefore(errorDiv, nav);

        setTimeout(clearError, 2000);
}

// Create function to clear error message
function clearError() {
    document.querySelector('.error').remove();
}
