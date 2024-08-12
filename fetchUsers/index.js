const tableBody = document.getElementById("body");
const counter = document.getElementById("counter");
let times = 0;
let counterText = document.createTextNode(times)
counter.appendChild(counterText)
document.body.appendChild(counter)

const getData = async () => {
    await fetch("./user.json")
    .then((response) => response.json())
    .then(value => populateTable(value))
};

const populateTable = (users) => {
    for (let i = 0; i < users.length; i++ ) {

        const row = document.createElement("tr");
        const user = Object.values(users[i]); // values of the object

        for (let j = 0; j < user.length ; j++ ) {
          console.log('users: ', user[j])
          const cell = document.createElement("td");
          let contentCell
          console.log('object values content: ', user[j])
          if ( j === user.length-1 ) {
            contentCell = document.createTextNode(Object.values(user[j]))
          } else {
            contentCell = document.createTextNode(user[j]);  
          };
          cell.appendChild(contentCell);
          row.appendChild(cell);
        };
         tableBody.appendChild(row);
    };
};

document.getElementById("load-data").addEventListener("click", async (event) => {
  // await event.preventDefault();
  await getData();
})




