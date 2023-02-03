const input = document.querySelector("#favchap");
const button = document.querySelector("#submitChapter");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value !== "") {
    let chapter = input.value
    
    const li = document.createElement("li");
    li.textContent = chapter;
    list.appendChild(li);

    const delButton = document.createElement("button");
    delButton.textContent = "❎";
    li.appendChild(delButton);

    delButton.addEventListener("click", () => {
      list.removeChild(li);
    })
  }
  
  input.value = "";
  input.focus();
});