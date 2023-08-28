async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    return res.json();
}

const todos = await getTodos();
