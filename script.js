const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Masukan tugas Untuk Dijadwalkan");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  savedata();
}

ListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function showtask() {
  ListContainer.innerHTML = localStorage.getItem("data");
}

showtask();
