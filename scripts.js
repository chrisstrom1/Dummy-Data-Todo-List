// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

 let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}
]
console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20

const fetchTodos = () => {
    console.log("fetchClick");
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos[0].title)
    console.log(arrayOfTodos[0].userId)
    
}

const populateTodos = () => {

}

function function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Element 4"));
  }