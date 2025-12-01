function taskDelay() {
  let taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task Completed");
    }, 2000); // 2 seconds delay
  });

  return taskPromise;
}

async function showMessage() {
    console.log("Task Started...");
  let result = await taskDelay(); 
  console.log(result); 
}
showMessage();