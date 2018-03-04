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

function addNewTask() {
  if (verifyLocalStorage()){
    let tempId = Math.random();
    let taskId = "nuutopiaTasks" + tempId;

    // localStorage.taskId = {
    //   id: 1111,
    //   title: "Task Title"
    // }

    let data = {
      id: 1111,
      title: "Task Title"
    }

    localStorage.setItem(tempVar, JSON.stringify(data));

  } else {
    return false;
  }
  getTaskFromLocalStorage();
}



module.exports = {
  addNewTask: addNewTask,
}