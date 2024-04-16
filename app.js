/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// select the paragraph with id="error" and assign it to a varaiable
let errorParagraph = document.getElementById("error");

// select the unordered list with id="list" and assign it to a variable
let listElement = document.getElementById("list");

// call getList function
getList()
  // from the result, call the then promise consumer method and pass in a callback function
  .then(result => {
    // iterate through the resolved list of hobbies
    result.forEach(hobbit => {
      // create a li for each hobbit
      let li = document.createElement("li");
      li.textContent = hobbit;
      // append the li to the ul from the DOM
      listElement.appendChild(li);
    });
  })

  // from the result of the then promise consumer method, chain a catch method consumer and pass in a callback function
  .catch(error => {
    //display the resolved failure object's message property as the text content of the error paragraph
    errorParagraph.textContent = error.message;
  });
