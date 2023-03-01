let exampleInputArray1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

function getUsersObj(users) {
  users.reduce((acc, index) => {
    acc.push(item.id);
    acc.push(item.name);
  }, {})
}

let output = getUsersObj(exampleInputArray1);
console.log(output);