let inp = document.querySelector("#taskinput");
let save_btn = document.querySelector(".save_task");
let tasks = document.querySelector(".tasks");

function create_task() {
  // Creating the task.
  let task = document.createElement("div");
  task.classList.add("task");
  let para = document.createElement("p");
  para.classList.add("text-center");
  para.innerText = inp.value;
  task.appendChild(para);
  tasks.appendChild(task);

  // Clearing the input bar
  inp.value = "";

  // Creating delete button
  let delete_btn = document.createElement("button");
  delete_btn.classList.add("btn");
  delete_btn.classList.add("btn-outline-danger");
  delete_btn.classList.add("delete_btn");
  delete_btn.innerText = "Delete this task";
  task.appendChild(delete_btn);

  // Removing task
  delete_btn.addEventListener("click", function () {
    tasks.removeChild(task);
  });
}

save_btn.addEventListener("click", create_task);

inp.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    create_task();
  }
});