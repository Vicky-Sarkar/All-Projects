// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------


const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/todos/`;

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");


loginUserButton.addEventListener("click", async function () {

  let username = loginUserUsername.value;
  let password = loginUserPassword.value;


  fetch(userLoginURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then((res) => {
    return res.json()


  }).then((data) => {
    let userAthToken = data.accessToken;
    let userId = data.user.id;


  }).catch((err) => {
    console.log(err)
  })

  if (true) {
    notificationWrapper.innerHTML = `<h5 class="notification info">
  hey admin, welcome back!
</h5>`

  }
  //display()
})

// function display() {


// }


getTodoButton.addEventListener("click", async function () {

  fetch(userLoginURL, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username: `${userAthToken}`,
      password: `${userId}`
    })
  }).then((res) => {
    return res.json()


  }).then((data) => {
    let userAthToken = data.accessToken;
    let userId = data.user.id;


  }).catch((err) => {
    console.log(err)
  })


})



