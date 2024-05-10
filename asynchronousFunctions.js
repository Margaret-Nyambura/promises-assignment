// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

async function printMessage(message, delayTime){
    await new Promise(resolve => 
        setTimeout(resolve, delayTime))
        console.log(message);
}

printMessage("I will graduate in November!", 1000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const userIds = [1,2,3,4];

const Promises = new Promise((resolve,reject) => {
    userIds.forEach(i => {
        
        function getUserData(id){
         if (id == i){
            resolve(`Your id is ${id}`);
         }
         else{
            reject(`ID ${id} is not your id`)
         }
    }
    getUserData(2)
})
});
 Promises.then(() =>{
    console.log("You do not have an id")
 })
.catch(()=>{
    console.log("Wait for your id")
})
.finally(()=>{
    console.log("The id belongs to you")
});
 
 // You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error.
 //  Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
 
 
 function performTask() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         const random = Math.random();
         if (random < 0.5) {
           resolve();
         } else {
           reject(new Error("An error occured!"));
         }
       }, 1500);
     });
   }
   async function checkErrorOrSuccess() {
     try {
       await performTask();
       console.log("Operation successful!");
     } catch (error) {
       console.error("An error occured when performing the operation", error);
     }
   }
 
   checkErrorOrSuccess();
 
 
 
 // Write a function unstableTask that: Accepts a taskName and failureProbability (a number between 0 and 1).
 // Returns a Promise that: Resolves immediately with a success message if a randomly generated number is greater than failureProbability. 
//  Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.


 function unstableTask(taskName, failureProbability) {

     return new Promise((resolve, reject) => {
     const randomValue = Math.random();
     if (randomValue > failureProbability) {
     resolve(`"${taskName}" successful`);
     } else {
     reject(new Error(`"${taskName}" unsuccessful`));
     }
     });
     }


//  Write another function executeWithRetry that:
// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


     async function executeWithRetry(taskName, retries, failureProbability) {
     for (let attempt =3; attempt => retries; attempt++) {
     try {
     await unstableTask(taskName, failureProbability);
     console.log(` ${attempt} Attempt: "${taskName}" was successfull`);
     return;
     } catch (error) {
     console.error(`${attempt} Attempt: ${error.message}`);
     }
     }
     console.log(`All ${retries}for "${taskName}" were not successful`);
     }
     executeWithRetry('executionTime', 3, 0);