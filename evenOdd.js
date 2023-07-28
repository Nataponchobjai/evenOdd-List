let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
  usersWord = element.value
  console.log(usersWord)
}

function handleSubmit() {
  let newListItem = document.createElement('li')
  newListItem.innerText = usersWord

  if(usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem)
    newListItem.classList.add("even-effect");
  } else {
    oddList.appendChild(newListItem)
    newListItem.classList.add("odd-effect");
  }

  usersWord = ""
  document.getElementById("even-odd-form").reset()
}
