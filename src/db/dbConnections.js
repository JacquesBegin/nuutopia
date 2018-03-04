let tempVar = "nuutopiaTasks" + Math.random();

function verifyLocalStorage() {
  if (typeof(Storage) !== "undefined") {
    console.log("storage found");
    return true;
  }
  return false;
}

// function createLocalDB() {
//   if (!localStorage.nuutopiaTasks) {
//     localStorage.nuutopiaTasks = []
//   }
// }

function getTaskFromLocalStorage() {
  let returnedData = localStorage.getItem(tempVar);
  console.log("returnedData: ", JSON.parse(returnedData));
}

function addNewTask(form) {
  console.log(form)
  if (verifyLocalStorage()){
    let tempId = Math.random();
    let taskId = "nuutopiaTasks" + tempId;

    // localStorage.taskId = {
    //   id: 1111,
    //   title: "Task Title"
    // }

    let data = {
      id: Math.floor(Math.random() * 2000),
      title: form.querySelector('input[name="title"]').value,
      location: form.querySelector('select[name="location"]').value,
      description: form.querySelector('textarea[name="description"]').value
    }

    let tempLocal = JSON.parse(localStorage.getItem("tasks"));
    tempLocal = tempLocal.concat(data);

    localStorage.setItem("tasks", JSON.stringify(tempLocal));
    window.location.href = "taskboard";
    //localStorage.setItem(tempVar, JSON.stringify(data));

  } else {
    return false;
  }
  getTaskFromLocalStorage();
}



module.exports = {
  addNewTask: addNewTask,
}