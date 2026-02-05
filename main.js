let tasks = []
let resultElement = document.getElementById('result')
document.getElementById('addBtn').addEventListener('click', () => {
  // get input value
  let value = document.getElementById('taskInput').value
 

  // push value to array
  tasks.push(value)

  // reset result element
  resultElement.innerHTML = ''

  // append all values in result
  tasks.forEach((item,index) => {
    resultElement.innerHTML += `<div>
      <h1>${item}</h1>
      <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `
  })
})

function deleteTask(index) {
  tasks.splice(index, 1)
   document.getElementById('searchInput').value = ''

  resultElement.innerHTML = ''

  tasks.forEach((item, index) => {
    resultElement.innerHTML += `
      <div>
        <h1>${item}</h1>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `
  })
}

document.getElementById('searchInput').addEventListener('keyup', () => {
  let searchKey = document.getElementById('searchInput').value

  let serchedTasks = tasks.filter(item => {
    return item.includes(searchKey)
  })

  resultElement.innerHTML = ''
  serchedTasks.forEach((item, index) => {
  resultElement.innerHTML += `
    <div>
      <h1>${item}</h1>
      <button onclick="deleteTask(${index})">Delete</button>
    </div>
  `
})

})

