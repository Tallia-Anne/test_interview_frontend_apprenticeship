fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        document.getElementById('todoList').innerHTML = 
            todos.slice(0, 5).map(todo => `<li>${todo.title}</li>`).join('');
    })
    .catch(error => console.error('Error fetching the todos:', error));